// import { useState } from 'react';
// import orderCoverImg from '../../../assets/shop/order.jpg'
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
// import { Helmet } from 'react-helmet-async';
// import Cover from '../../CommonPages/Cover/Cover';
// import OrderTab from './OrderTab/OrderTab';
// import { useParams } from 'react-router-dom';
// import useMenu from '../../../Hooks/useMenu';

// const Order = () => {
//     const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
//     const { category } = useParams();
//     console.log("category",category)
//     const initialIndex = categories.indexOf(category);
//     const [tabIndex, setTabIndex] = useState(initialIndex);
//     const [menu] = useMenu();
//     console.log("menu data:", menu);

    
//     const desserts = menu.filter(item => item.category === 'dessert');
//     const soup = menu.filter(item => item.category === 'soup');
//     const salad = menu.filter(item => item.category === 'salad');
//     const pizza = menu.filter(item => item.category === 'pizza');
//     const drinks = menu.filter(item => item.category === 'drinks');

//     return (
//         <div>
//             <Helmet>
//                 <title>Bistro Boss | Order Food</title>
//             </Helmet>
//             <Cover img={orderCoverImg} title="Order Food"></Cover>
//             <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className='mt-8' >
//                 <TabList>
//                     <Tab>Salad</Tab>
//                     <Tab>Pizza</Tab>
//                     <Tab>Soup</Tab>
//                     <Tab>Dessert</Tab>
//                     <Tab>Drinks</Tab>
//                 </TabList>
//                 <TabPanel>
//                     <OrderTab items={salad}></OrderTab>
//                 </TabPanel>
//                 <TabPanel>
//                     <OrderTab items={pizza}></OrderTab>
//                 </TabPanel>
//                 <TabPanel>
//                     <OrderTab items={soup}></OrderTab>
//                 </TabPanel>
//                 <TabPanel>
//                     <OrderTab items={desserts}></OrderTab>
//                 </TabPanel>
//                 <TabPanel>
//                     <OrderTab items={drinks}></OrderTab>
//                 </TabPanel>
//             </Tabs>
//         </div>
//     );
// };

// export default Order;



import { useState } from 'react';
import orderCoverImg from '../../../assets/shop/order.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Helmet } from 'react-helmet-async';
import Cover from '../../CommonPages/Cover/Cover';
import OrderTab from './OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import useMenu from '../../../Hooks/useMenu';

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category) !== -1 ? categories.indexOf(category) : 0;
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();

    console.log("menu data:", menu);
    if (!menu || menu.length === 0) {
        return <div>Loading...</div>;
    }

    const desserts = menu.filter(item => item.category.toLowerCase() === 'dessert');
    const soup = menu.filter(item => item.category.toLowerCase() === 'soup');
    const salad = menu.filter(item => item.category.toLowerCase() === 'salad');
    const pizza = menu.filter(item => item.category.toLowerCase() === 'pizza');
    const drinks = menu.filter(item => item.category.toLowerCase() === 'drinks');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>
            <Cover img={orderCoverImg} title="Order Food"></Cover>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className='mt-8'>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={desserts}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;
