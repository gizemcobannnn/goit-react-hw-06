// src/components/TaskList/TaskList.js

  // 1. Hook içe aktarıyoruz
  import { useSelector } from 'react-redux';
  import { Task } from '../Task/Task';
  
  const getVisibleTasks = (tasks, statusFilter) => {
    switch (statusFilter) {
      case 'active':
        return tasks.filter((task) => !task.completed);
      case 'completed':
        return tasks.filter((task) => task.completed);
      default:
        return tasks;
    }
  };
  
  export const TaskList = () => {
      // 2. Redux durumundan görevler dizisini alıyoruz
    const tasks = useSelector((state) => state.tasks.items);
  
    // 3. Redux durumundan filtre değerini alıyoruz
    const statusFilter = useSelector((state) => state.filters.status);
  
    // 4. Arayüzde görüntülenecek görevlerin dizisini hesaplıyoruz
    const visibleTasks = getVisibleTasks(tasks, statusFilter);
  
    return (
      <ul className={css.list}>
        {visibleTasks.map((task) => (
          <li className={css.listItem} key={task.id}>
            <Task task={task} />
          </li>
        ))}
      </ul>
    );
  };
  