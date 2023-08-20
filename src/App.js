import { useEffect, useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import { apiUrl, filterData } from "./data";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

function App() {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setIsLoading(true);
    try {
      const response = await fetch(apiUrl);
      const output = await response.json();
      setCourses(output.data);
    } catch (error) {
      toast.error("Something unexpected");
    }
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-[100vh] w-[100vw] bg-red-300 flex flex-col items-center  ">
      <Navbar />
      <Filter
        filterData={filterData}
        category={category}
        setCategory={setCategory}
      />
      {isLoading ? (
        <Spinner />
      ) : (
        <Cards courses={courses} category={category} />
      )}
    </div>
  );
}

export default App;
