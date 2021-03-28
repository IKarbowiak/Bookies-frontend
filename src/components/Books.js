import {gql, useQuery} from "@apollo/client"
import {Card, CardDeck} from "react-bootstrap"
import {Link} from 'react-router-dom'

const BOOK_ATTRIBUTES = gql`
  fragment BookInfo on Book{
    id
    title
    author {
      name
    }
    year
    description
    cover
  }
` 

const BOOKS = gql`
  query books {
    books {
      edges {
        node {
          ...BookInfo
        }
      }
    }
  }
  ${BOOK_ATTRIBUTES}
`

const BOOK_BY_ID = gql`
  query bookById($id: ID!) {
    book(id: $id) {
      ...BookInfo
    }
  }
  ${BOOK_ATTRIBUTES}
`


const BooksList = () => {
  const {loading, error, data} = useQuery(BOOKS)
  // with variable
  // const {book_id} = useParams() <-- param from url, for example <Route path={/books/:book_id}>
  // useParams from react_router_dom
  // const {loading, error, data} = useQuery(BOOK_BY_ID, variables: {id: book_id})

  if (loading) return <p>Loading books...</p>
  if (error) return <p>Error loading books!</p>
  return data.books.edges.map((node_data) => {
    const book = node_data.node
    return <BookItem
      key={book.id}
      book_data={{
        book: {
          ...book
        },
        author: {
          ...book.author
        }
      }}
    />
  })
}



const BookItem = ({book_data}) => {
  const {book, author} = book_data
  const {id, title, year, description, cover} = book
  return (
    <Card key={id} style={{height: "600px", maxWidth: "300px", minWidth: "300px", margin: "10px 10px"}}>
      <Card.Img variant="top" src={cover} style={{maxWidth: '70%', maxHeight: '70%', padding:"10%", margin: "0 auto"}}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Written by {author.name}</Card.Subtitle>
        <Card.Text style={{maxHeight: '70%', overflow: "auto"}}>
          {description}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Published {year}</small>
      </Card.Footer>
    </Card>
  )
}


export const Books = () => {
  return (
    <div>
      <CardDeck style={{display: "flex", flexWrap: "wrap", alignItems: "stretch", padding: "10px", margin: "0 auto"}}>
        <BooksList />
      </CardDeck>
      <Link to="/">Back</Link>
    </div>
  )
}

