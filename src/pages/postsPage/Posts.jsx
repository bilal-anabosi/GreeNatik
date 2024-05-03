import React, { useEffect, useState } from "react";
import Post from "../../components/post/Post.jsx";
import classes from "./Posts.module.css";
import DropdownMenu from "../../components/post/DropDowns.jsx";
import PostModal from "../../components/post/PostModal.jsx";
import Pagination from "../../components/post/Pagination.jsx";
function generateRandomProgress() {
  return Math.floor(Math.random() * 101); // Generates a random number between 0 and 100
}
const citiesAndFactories = [
  {
    city: "Ramallah",
    factory: "Plastic Manufacturing Co.",
    requestType: "plastic",
    quantity: "1000 kg",
    date: "30 april 2024",

    progress: generateRandomProgress(),
  },
  {
    city: "Gaza City",
    factory: "Metal Fabrication Ltd.",
    requestType: "metal",
    quantity: "500 kg",
    date: "30 may 2024",
    progress: generateRandomProgress(),
  },
  {
    city: "Hebron",
    factory: "Paper Packaging Industries",
    requestType: "paper",
    quantity: "700 kg",
    date: "30 june 2024",
    progress: generateRandomProgress(),
  },
  {
    city: "Nablus",
    factory: "Glassworks Company",
    requestType: "glass",
    quantity: "2000 kg",
    date: "10 march 2024",
    progress: generateRandomProgress(),
  },
  {
    city: "Jericho",
    factory: "Recycling Plant",
    requestType: "others",
    quantity: "500 kg",
    date: "30 march 2024",
    progress: generateRandomProgress(),
  },
  {
    city: "Bethlehem",
    factory: "Ceramics Co.",
    requestType: "others",
    quantity: "300 kg",
    date: "20 may 2026",
    progress: generateRandomProgress(),
  },
  {
    city: "Jenin",
    factory: "Aluminum Works",
    requestType: "metal",
    quantity: "150 kg",
    date: "1 january 2025",
    progress: generateRandomProgress(),
  },
  {
    city: "Tulkarm",
    factory: "Packaging Solutions",
    requestType: "plastic",
    quantity: "80 kg",
    date: "17 june 2020",
    progress: generateRandomProgress(),
  },
  {
    city: "Qalqilya",
    factory: "Fiberboard Industries",
    requestType: "paper",
    quantity: "60 kg",
    date: "14 may 2012",
    progress: generateRandomProgress(),
  },
  {
    city: "Beit Sahour",
    factory: "Glass Bottle Co.",
    requestType: "glass",
    quantity: "100 kg",
    date: "11 february 2010",
    progress: generateRandomProgress(),
  },
  {
    city: "Bethlehem",
    factory: "Ceramics Co.",
    requestType: "others",
    quantity: "300 kg",
    date: "11 december 2025",
    progress: generateRandomProgress(),
  },
  {
    city: "Jenin",
    factory: "Aluminum Works",
    requestType: "metal",
    quantity: "150 kg",
    date: "13 july 2024",
    progress: generateRandomProgress(),
  },
  {
    city: "Tulkarm",
    factory: "Packaging Solutions",
    requestType: "plastic",
    quantity: "80 kg",
    date: "25 april 2018",
    progress: generateRandomProgress(),
  },
  {
    city: "Ramallah",
    factory: "Plastic Manufacturing Co.",
    requestType: "plastic",
    quantity: "1000 kg",
    date: "30 april 2024",

    progress: generateRandomProgress(),
  },
  {
    city: "Gaza City",
    factory: "Metal Fabrication Ltd.",
    requestType: "metal",
    quantity: "500 kg",
    date: "30 may 2024",
    progress: generateRandomProgress(),
  },
  {
    city: "Hebron",
    factory: "Paper Packaging Industries",
    requestType: "paper",
    quantity: "700 kg",
    date: "30 june 2024",
    progress: generateRandomProgress(),
  },
  {
    city: "Nablus",
    factory: "Glassworks Company",
    requestType: "glass",
    quantity: "2000 kg",
    date: "10 march 2024",
    progress: generateRandomProgress(),
  },
  {
    city: "Jericho",
    factory: "Recycling Plant",
    requestType: "others",
    quantity: "500 kg",
    date: "30 march 2024",
    progress: generateRandomProgress(),
  },
  {
    city: "Bethlehem",
    factory: "Ceramics Co.",
    requestType: "others",
    quantity: "300 kg",
    date: "20 may 2026",
    progress: generateRandomProgress(),
  },
  {
    city: "Jenin",
    factory: "Aluminum Works",
    requestType: "metal",
    quantity: "150 kg",
    date: "1 january 2025",
    progress: generateRandomProgress(),
  },
  {
    city: "Tulkarm",
    factory: "Packaging Solutions",
    requestType: "plastic",
    quantity: "80 kg",
    date: "17 june 2020",
    progress: generateRandomProgress(),
  },
  {
    city: "Qalqilya",
    factory: "Fiberboard Industries",
    requestType: "paper",
    quantity: "60 kg",
    date: "14 may 2012",
    progress: generateRandomProgress(),
  },
  {
    city: "Beit Sahour",
    factory: "Glass Bottle Co.",
    requestType: "glass",
    quantity: "100 kg",
    date: "11 february 2010",
    progress: generateRandomProgress(),
  },
  {
    city: "Bethlehem",
    factory: "Ceramics Co.",
    requestType: "others",
    quantity: "300 kg",
    date: "11 december 2025",
    progress: generateRandomProgress(),
  },
  {
    city: "Jenin",
    factory: "Aluminum Works",
    requestType: "metal",
    quantity: "150 kg",
    date: "13 july 2024",
    progress: generateRandomProgress(),
  },
  {
    city: "Tulkarm",
    factory: "Packaging Solutions",
    requestType: "plastic",
    quantity: "80 kg",
    date: "25 april 2018",
    progress: generateRandomProgress(),
  },
];
const Posts = () => {
  const [originalData, setOriginalData] = useState(citiesAndFactories);
  const [filteredData, setFilteredData] = useState([]);
  const [almostCompletedData, setAlmostCompletedData] = useState([]);

  const [filter, setFilter] = useState({
    quantity: "",
    requestType: "",
    city: "",
    sortType: "",
  });

  useEffect(() => {
    const almostCompletedData = [...originalData]
      .sort((a, b) => b.progress - a.progress)
      .slice(0, 4);
    setAlmostCompletedData(almostCompletedData);
  }, [originalData]);

  useEffect(() => {
    let filteredData = [...originalData];

    if (filter.quantity) {
      filteredData = filteredData.filter((item) => {
        const itemQuantity = +{ ...item }.quantity.replace("kg", "").trimEnd();

        return (
          itemQuantity >= filter.quantity[0] &&
          itemQuantity <= filter.quantity[1]
        );
      });
      console.log("filteredData from quantity", filteredData);
    }

    if (filter.city) {
      filteredData = filteredData.filter(
        (item) =>
          item.city.toLocaleLowerCase() === filter.city.toLocaleLowerCase()
      );
      console.log("filteredData from city", filteredData);
    }

    if (filter.requestType) {
      filteredData = filteredData.filter(
        (item) =>
          item.requestType.toLocaleLowerCase() ===
          filter.requestType.toLocaleLowerCase()
      );

      console.log("filteredData from requestType", filteredData);
    }

    if (filter.sortType === "Latest") {
      filteredData = filteredData.sort(
        (a, b) => parseDate(b.date) - parseDate(a.date)
      );
    }

    if (filter.sortType === "Earliest") {
      filteredData = filteredData.sort(
        (a, b) => parseDate(a.date) - parseDate(b.date)
      );
    }
    console.log("final data", filteredData);
    setFilteredData(filteredData);
  }, [filter]);

  const onQuantityChange = (e) => {
    e.preventDefault();
    const value = e.target.text;

    if (value === "all") {
      setFilter((prev) => ({ ...prev, quantity: "" }));
      return;
    }
    const range = value.split("-").map((number) => +number.replace("kg", ""));

    console.log("range", range);
    setFilter((prev) => ({ ...prev, quantity: range }));
  };

  const onMaterialChange = (e) => {
    e.preventDefault();
    const material = e.target.text;
    if (material === "all") {
      setFilter((prev) => ({ ...prev, requestType: "" }));
      return;
    }

    console.log("material", material);
    setFilter((prev) => ({ ...prev, requestType: material }));
  };
  const onCityChange = (e) => {
    e.preventDefault();
    const city = e.target.text;

    if (city === "all") {
      setFilter((prev) => ({ ...prev, city: "" }));
      return;
    }

    console.log("city", city);
    setFilter((prev) => ({ ...prev, city: city }));
  };

  const parseDate = (dateString) => {
    const [day, month, year] = dateString.split(" ");
    const date = new Date(`${month} ${day}, ${year}`);
    return date;
  };

  const onSortClick = (e) => {
    const selectedSortCraiteria = e.target.text;
    if (selectedSortCraiteria === "none") {
      setFilter((prev) => ({ ...prev, sortType: "" }));
      return;
    }
    console.log("selectedSortCraiteria", selectedSortCraiteria);
    setFilter((prev) => ({ ...prev, sortType: selectedSortCraiteria }));
  };

  const quantityChoices = [
    { label: "all", value: "" },
    { label: "5kg-20kg", value: "5-20" },
    { label: "21kg-50kg", value: "21-50" },
    { label: "51kg-100kg", value: "51-100" },
    { label: "101kg-200kg", value: "101-200" },
    { label: "201kg-500kg", value: "201-500" },
  ];

  const materialChoices = [
    { label: "all", value: "" },
    { label: "Plastic", value: "Plastic" },
    { label: "Metal", value: "Metal" },
    { label: "Paper", value: "Paper" },
    { label: "Glass", value: "Glass" },
    { label: "Others", value: "Others" },
  ];
  const cityChoices = [
    { label: "all", value: "" },
    { label: "Ramallah", value: "Ramallah" },
    { label: "Gaza City", value: "Gaza City" },
    { label: "Hebron", value: "Hebron" },
    { label: "Nablus", value: "Nablus" },
    { label: "Jenin", value: "Jenin" },
  ];

  return (
    <div className="container" aria-label="Page navigation example">
      <div className="row ">
        <PostModal />
        <div className={classes.almostCompletedDemands}>
          <h3>Almost Completed Demands</h3>
        </div>
        <div className="container">
          <div className="row">
            {almostCompletedData.map((post, index) => (
              <Post
                key={index}
                city={post.city}
                factory={post.factory}
                requestType={post.requestType}
                quantity={post.quantity}
                date={post.date}
                progress={post.progress}
              />
            ))}

            <h4>All Recycling Factories' Material demands</h4>
            <h6>
              <small>
                here you can browse what each company demand of material is
              </small>
            </h6>
            <div className={classes.menus}>
              <div className={`${classes.filterContainer}`}>
                <DropdownMenu
                  title="Select City"
                  choices={cityChoices}
                  onChange={onCityChange}
                />
                <DropdownMenu
                  title="Select material"
                  choices={materialChoices}
                  onChange={onMaterialChange}
                />
                <DropdownMenu
                  title="Quantity"
                  choices={quantityChoices}
                  onChange={onQuantityChange}
                />
                <div className={classes.sort}>
                  <div class="dropdown">
                    <button
                      class="btn btn-secondary dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Sort by:
                    </button>
                    <ul class="dropdown-menu" onClick={onSortClick}>
                      <li>
                        <a class="dropdown-item" href="#">
                          None
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Latest
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Earliest
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Pagination posts={filteredData} />
    </div>
  );
};

export default Posts;
