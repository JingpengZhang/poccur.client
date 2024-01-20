import React, {ChangeEvent, useRef, useState} from "react";
import Space from "@/components/space";
import {Button, Input, Select, SelectItem, Spacer, Textarea} from "@nextui-org/react";
import {Image} from "@nextui-org/image";
import {Eye, EyeOff, ImagePlus, Send} from "lucide-react";
import {MdEditor} from "md-editor-rt";
import 'md-editor-rt/lib/style.css'
import PasswordInput from "@/components/password-input";

interface Props {
}

const PostArticle: React.FC<Props> = () => {

  // 文章内容
  const [text, setText] = useState('hello md-editor-rt!');

  // 封面预览
  const [coverPreview, setCoverPreview] = useState('')

  const coverInputRef = useRef<HTMLInputElement>(null)

  // 封面文件
  const [coverFile, setCoverFile] = useState<File>()

  const handleCoverInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setCoverFile(file)
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = function () {
        setCoverPreview(this.result as string)
      }
    }
  }

  // 标题
  const [title, setTitle] = useState('')
  // 概要
  const [description, setDescription] = useState('')
  // 密码
  const [password, setPassword] = useState('')
  // 分类
  const [categoryID, setCategoryID] = useState(0);
  // 标签
  const [tagIDs, setTagIDs] = useState<number[]>([])
  // 分类列表
  const [categoryList, setCategoryList] = useState([])
  // 标签列表
  const [tagList, setTagList] = useState([])

  return (
      <div className='flex justify-between'>
        <div className='flex-grow w-72'>
          <Space>
            <Input isRequired label='标题' placeholder='请输入标题'/>
          </Space>
          <MdEditor className='mt-6' modelValue={text} onChange={setText}/>
        </div>
        <div className='flex-shrink-0 w-80 ml-10'>
          <div className='w-full aspect-video overflow-hidden rounded-lg shadow-md'>
            <img className='w-full h-full object-cover' alt='封面' src={coverPreview}/>
          </div>
          <input onChange={handleCoverInput} ref={coverInputRef} className='sr-only' type={"file"}/>
          <Spacer y={6}/>
          <Select label='分类' isRequired placeholder='请选择分类'>
            {
              ['前端', '后端'].map(item =>
                  <SelectItem key={item} value={item}>
                    {item}
                  </SelectItem>)
            }
          </Select>
          <Spacer y={4}/>
          <Select label='标签' selectionMode="multiple" placeholder='请选择标签'>
            {
              ['前端', '后端'].map(item =>
                  <SelectItem key={item} value={item}>
                    {item}
                  </SelectItem>)
            }
          </Select>
          <Spacer y={4}/>
          <PasswordInput label='密码' placeholder='请输入密码'/>
          <Spacer y={4}/>
          <Textarea label='概要' minRows={6} placeholder='请输入概要'/>
          <Space className='mt-6'>
            <Button onClick={() => coverInputRef.current?.click()}
                    startContent={<ImagePlus size={18}/>}>更换封面</Button>
            <Button color='primary' startContent={<Send size={18}/>}>发布</Button>
          </Space>
        </div>
      </div>
  )
}

export default PostArticle