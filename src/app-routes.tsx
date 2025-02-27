import { HomePage, TasksPage, ProfilePage, SortableBlock  } from './pages';
import { withNavigationWatcher } from './contexts/navigation';

const routes = [
    {
        path: '/tasks',
        element: TasksPage
    },
    {
        path: '/profile',
        element: ProfilePage
    },
    {
        path: '/home',
        element: HomePage
    },
    {
        path: '/sortable',
        element: SortableBlock
    },
];

export default routes.map(route => {
    return {
        ...route,
        element: withNavigationWatcher(route.element, route.path)
    };
});
