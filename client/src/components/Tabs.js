import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProductCard from './ProductCard';
import Grid from '@mui/material/Grid';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
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
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function VerticalTabs() {
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
            href: 'https://5.imimg.com/data5/SELLER/Default/2023/6/317704862/YZ/JO/LV/955096/manufacturer-wholesaler-and-worldwide-exporter-of-chipsona-potatoes-500x500.jpg',
            imageSrc: 'https://5.imimg.com/data5/SELLER/Default/2023/6/317704862/YZ/JO/LV/955096/manufacturer-wholesaler-and-worldwide-exporter-of-chipsona-potatoes-500x500.jpg',
            price: "Rs 5/Kg"
        },

        {
            id: 3,
            title: 'Badshah Chipsona Potato ',
            href: 'https://5.imimg.com/data5/SELLER/Default/2023/6/317704862/YZ/JO/LV/955096/manufacturer-wholesaler-and-worldwide-exporter-of-chipsona-potatoes-500x500.jpg',
            imageSrc: 'https://5.imimg.com/data5/SELLER/Default/2023/6/317704862/YZ/JO/LV/955096/manufacturer-wholesaler-and-worldwide-exporter-of-chipsona-potatoes-500x500.jpg',
            price: "Rs 5/Kg"
        },

        {
            id: 4,
            title: 'Badshah Chipsona Potato ',
            href: 'https://5.imimg.com/data5/SELLER/Default/2023/6/317704862/YZ/JO/LV/955096/manufacturer-wholesaler-and-worldwide-exporter-of-chipsona-potatoes-500x500.jpg',
            imageSrc: 'https://5.imimg.com/data5/SELLER/Default/2023/6/317704862/YZ/JO/LV/955096/manufacturer-wholesaler-and-worldwide-exporter-of-chipsona-potatoes-500x500.jpg',
            price: "Rs 5/Kg"
        },

        {
            id: 5,
            title: 'Badshah Chipsona Potato ',
            href: 'https://5.imimg.com/data5/SELLER/Default/2023/6/317704862/YZ/JO/LV/955096/manufacturer-wholesaler-and-worldwide-exporter-of-chipsona-potatoes-500x500.jpg',
            imageSrc: 'https://5.imimg.com/data5/SELLER/Default/2023/6/317704862/YZ/JO/LV/955096/manufacturer-wholesaler-and-worldwide-exporter-of-chipsona-potatoes-500x500.jpg',
            price: "Rs 5/Kg"
        },

        {
            id: 6,
            title: 'Badshah Chipsona Potato ',
            href: 'https://5.imimg.com/data5/SELLER/Default/2023/6/317704862/YZ/JO/LV/955096/manufacturer-wholesaler-and-worldwide-exporter-of-chipsona-potatoes-500x500.jpg',
            imageSrc: 'https://5.imimg.com/data5/SELLER/Default/2023/6/317704862/YZ/JO/LV/955096/manufacturer-wholesaler-and-worldwide-exporter-of-chipsona-potatoes-500x500.jpg',
            price: "Rs 5/Kg"
        }
    ]
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Grid container sx={{ flexGrow: 1 }}>
            <Grid item xs={2}>
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{ borderRight: 1, borderColor: 'divider' }}
                >
                    <Tab label="Vegetables" {...a11yProps(0)} />
                    <Tab label="Agricultural Need" {...a11yProps(1)} />
                </Tabs>
            </Grid>
            <Grid item xs={10}>
                <TabPanel value={value} index={0}>
                    <Grid container spacing={1}>
                        {products.map((product) => (
                            <Grid item key={product.id} xs={12} sm={6} md={4}>
                                <ProductCard product={product} />
                            </Grid>
                        ))}
                    </Grid>
                </TabPanel>
            </Grid>
        </Grid>
    );
}
