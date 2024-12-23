// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import AddBookForm from './Components/AddBookForm';
import BookList from './Components/BookList';
import BookProvider from "./Services/BookProvider";

function App() {
  return (
    <div className="App">
      <BookProvider>
        <Navbar/>
        <AddBookForm/>
        <BookList/>
      </BookProvider>
    </div>
  );
}

export default App;
