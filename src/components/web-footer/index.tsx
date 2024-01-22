const WebFooter = () =>{
  return (
      <div className='w-full border-t border-gray mt-8 text-sm text-[#1a1a1a]'>
        <div className='inner-page h-12 flex items-center justify-center'>
          &copy; 2024 - {new Date().getFullYear()}
        </div>
      </div>
  )
}

export default WebFooter