import styled from "styled-components"


const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 500;
`

const Announcement = () => {
  return (
    <Container>
       ** تخفیف های جدید و شگفت انگیز در راه است **
    </Container>
  )
}

export default Announcement
