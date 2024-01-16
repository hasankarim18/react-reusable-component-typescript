import "./App.css";
import Button from "./components/ui/Button";
import Container from "./components/ui/Container";
// import MainLayout from "./components/layout/MainLayout";

function App() {
  return (
    <>
      <Container>
        <div className="h-screen w-full flex justify-center items-center">
          <Button className="bg-blue-500" outline />
        </div>
      </Container>
    </>
  );
}

export default App;
