function SlideCard({ imageUrl, title }) {
  return (
    <div>
      <img src={imageUrl} alt={title} />
      <div>{title}</div>
    </div>
  )
}

export default SlideCard

/*   <SlideCard imageUrl="" title="" /> */
