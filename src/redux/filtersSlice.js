// src/components/StatusFilter/StatusFilter.jsx

  // Hook içe aktarıyoruz
  import { useSelector } from "react-redux";

  export const StatusFilter = () => {
    // 2. Redux durumundan filtre değerini alıyoruz
    const filter = useSelector(state => state.filters.status);
  
    return (
      <div>
        <button>All {filter === "all" && "is active"}</button>
        <button>Active {filter === "active" && "is active"}</button>
        <button>Completed {filter === "completed" && "is active"}</button>
      </div>
    );
  };
  