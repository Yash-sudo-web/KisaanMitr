import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProductCard from './ProductCard';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const products = [
        {
            id: 1,
            title: 'Badshah Chipsona Potato ',
            href: 'https://www.indiamart.com/proddetail/manufacturer-wholesaler-and-worldwide-exporterrjtkykjhrfgtm  -of-badshah-chipsona-potatoes-2851570576373.html',
            imageSrc: 'https://5.imimg.com/data5/SELLER/Default/2023/6/317704862/YZ/JO/LV/955096/manufacturer-wholesaler-and-worldwide-exporter-of-chipsona-potatoes-500x500.jpg',
            price: "Rs 5/Kg"
        },

        {
            id: 2,
            title: 'Badshah Chipsona Potato ',
            href: 'https://www.indiamart.com/proddetail/manufacturer-wholesaler-and-worldwide-exporter-of-badshah-chipsona-potatoes-2851570576373.html',
            imageSrc: 'https://www.indiamart.com/proddetail/manufacturer-wholesaler-and-worldwide-exporter-of-badshah-chipsona-potatoes-2851570576373.html',
            price: "Rs 5/Kg"
        },

        {
            id: 3,
            title: 'Badshah Chipsona Potato ',
            href: 'https://www.indiamart.com/proddetail/manufacturer-wholesaler-and-worldwide-exporter-of-badshah-chipsona-potatoes-2851570576373.html',
            imageSrc: 'https://www.indiamart.com/proddetail/manufacturer-wholesaler-and-worldwide-exporter-of-badshah-chipsona-potatoes-2851570576373.html',
            price: "Rs 5/Kg"
        },

        {
            id: 4,
            title: 'Badshah Chipsona Potato ',
            href: 'https://www.indiamart.com/proddetail/manufacturer-wholesaler-and-worldwide-exporter-of-badshah-chipsona-potatoes-2851570576373.html',
            imageSrc: 'https://www.indiamart.com/proddetail/manufacturer-wholesaler-and-worldwide-exporter-of-badshah-chipsona-potatoes-2851570576373.html',
            price: "Rs 5/Kg"
        },

        {
            id: 5,
            title: 'Badshah Chipsona Potato ',
            href: 'https://www.indiamart.com/proddetail/manufacturer-wholesaler-and-worldwide-exporter-of-badshah-chipsona-potatoes-2851570576373.html',
            imageSrc: 'https://www.indiamart.com/proddetail/manufacturer-wholesaler-and-worldwide-exporter-of-badshah-chipsona-potatoes-2851570576373.html',
            price: "Rs 5/Kg"
        },

        {
            id: 6,
            title: 'Badshah Chipsona Potato ',
            href: 'https://www.indiamart.com/proddetail/manufacturer-wholesaler-and-worldwide-exporter-of-badshah-chipsona-potatoes-2851570576373.html',
            imageSrc: 'https://5.imimg.com/data5/SELLER/Default/2023/6/317704862/YZ/JO/LV/955096/manufacturer-wholesaler-and-worldwide-exporter-of-chipsona-potatoes-500x500.jpg',
            price: "Rs 5/Kg"
        }
    ]

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} 
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
                centered>
                    <Tab label="Item One" {...a11yProps(0)} />
                    <Tab label="Item Two" {...a11yProps(1)} />
                    <Tab label="Item Three" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                {products.map((product) =>
                    <ProductCard key={product.id} product={product} />
                )}
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                Item Two
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                Item Three
            </CustomTabPanel>
        </Box>
    );
}