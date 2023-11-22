const ViewDetailBlog = ({ params }: { params: { id: string } }) => {
  console.log(">> check id: ", params.id)
  return (
      <div>
          view detail with lotusdev = {params.id}
      </div>
  )
}

export default ViewDetailBlog;