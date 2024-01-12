interface IComponentProps {
  className?: string
}

interface ICategory {
  id: number;
  name: string;
  cover?: string;
  children?: ICategory[];
}

interface IArticle {
  id: number;
  title: string;
  description: string;
  cover: string;
  createTime: string;
}

interface IUser {
  id: number;
  username: string;
  avatar: string;
  registTime: string;
}