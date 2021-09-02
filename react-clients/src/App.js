import { useQuery, gql } from "@apollo/client";


const GET_BOOKS = gql`
  query GetBooks {
    books {
      title,
      author
    }
  }
`;

function App() {
  const { loading, error, data } =  useQuery(GET_BOOKS);
  return (
    <div className="App">
      <h1> My first Apollo app 🚀 </h1>
      <h3>My Book</h3>
      {loading &&  <div>Loading ...</div>}
      {error && <div>Error ...</div>}
      {data?.books.map(book => (
        <div key={book.title}>
          Title: {book.title} <br />
          Author: {book.author}
        </div>
      ))}
    </div>
  );
}

export default App;
