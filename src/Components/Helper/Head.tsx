import React from "react"

interface HeadProps {
  title: string
}

function Head(props: HeadProps) {
  React.useEffect(() => {
    document.title = props.title
  }, [props])

  return (
    <>

    </>
  )
}

export default Head