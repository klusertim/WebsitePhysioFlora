import { Center, createStyles, Overlay, Paper, Flex, Container, Affix, TypographyStylesProvider, ActionIcon, Group, Stack, ScrollArea } from "@mantine/core";
import useSWR from 'swr'
// import InfoData from "./InfoData";
import {InfoBoxContext } from "@/contexts/infobox.context";
import { useContext, useEffect, useMemo, useState } from 'react';
import {RxCross1, RxInfoCircled} from "react-icons/rx";
import { useRouter } from "next/router";
import { motion } from "framer-motion";



const useStyles = createStyles((theme) => ({
    blur:{
        backdropFilter: "blur(5px)",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
    },
    paper:{
        // backgroundColor: "white",
        opacity: 1,
        padding: "3vh",
        overflow: "hidden",
        position: "relative",
        zIndex: 2,
        backdropFilter: "blur(5px)",
        backgroundColor: "rgba(202, 234, 250, 0.8)",
        width: "45vw",
        
    },
    iconX: {
        position: "absolute",
        top: 10,
        right: 10,
        zIndex: 5
    },
    iconInfo:{
        color: theme.colors.blue,
        position: "absolute",
        top: 10,
        right: 10,
        zIndex: 1
      },
    provider: {
        fontSize: "4em",
        paddingLeft: 50,
        'h2':{
            fontSize: "2em",
        }
        
    }
}))

const fetcher = (args: string) => fetch(args).then((res) => res.json());


interface Categories{
    german: number,
    french: number,
    publish: number
}



export default function Info2(){
    const {classes} = useStyles()
    const {infoBoxOpen, setInfoBoxOpen} = useContext(InfoBoxContext)

    // const [categoryData, setCategoryData] = useState<CategoryData>();
    const [categoryMounted, setCategoryMounted] = useState(false);
    const [categoryId, setCategoryId] = useState<Categories>({german:-1, french: -1, publish: -1})
    const {locale} : {locale?: string} = useRouter();
    const [isGerman, setIsGerman] = useState(locale=="de")

    

    const {data: categoryData, error: categoryError} = useSWR("http://9d9gom4m.lx28.hoststar.website/wp-json/wp/v2/categories", fetcher)
    const {data, error} = useSWR(categoryMounted ? `http://9d9gom4m.lx28.hoststar.website/wp-json/wp/v2/posts?categories=${categoryId.publish}&_embed`:null, fetcher)
    // const {data: germanData, error: germanError} = useSWR(categoryMounted ? `http://9d9gom4m.lx28.hoststar.website/wp-json/wp/v2/posts?categories=${categoryId.german}&categories=${categoryId.publish}&_embed`:null, fetcher)
    // const {data: frenchData, error: frenchError} = useSWR(categoryMounted ? `http://9d9gom4m.lx28.hoststar.website/wp-json/wp/v2/posts?categories=${categoryId.french}&categories=${categoryId.publish}&_embed`:null, fetcher)
    // let [localData, setLocalData]  = useState<typeof germanData>(null)
    // const [germanData, setGermanData] = useState<typeof data>(null)
    // const [frenchData, setFrenchData] = useState<typeof data>(null)


    // we have to use useMemo because the data loaded by useSWR is cached between reloads => useEffect isn't triggered (oder so)
    const frenchData:typeof data = useMemo(() =>{
            if (data){
                return data.filter((post: typeof data) => post.categories.includes(categoryId.french))
            }
            return null
        }
    , [data])

    const germanData:typeof data = useMemo(() =>{
        if (data){
            return data.filter((post: typeof data) => post.categories.includes(categoryId.german))
        }
        return null
    }
, [data])

    const localData:typeof data = useMemo(() =>{
        if (data){
            // return data.filter((post: typeof data) => post.categories.includes(categoryId.french))
            if (locale == "de"){
                return germanData
            }else{
                return frenchData
            }
        }
        return null
    }
    , [locale, frenchData, germanData])



    useEffect(()=>{
        if (categoryData){
            let germanCategory = categoryData.filter((cat: typeof categoryData) => cat.name == "german")[0].id
            let frenchCategory = categoryData.filter((cat: typeof categoryData) => cat.name == "french")[0].id
            let publishCategory = categoryData.filter((cat: typeof categoryData) => cat.name == "publish")[0].id
            setCategoryId({german: germanCategory, french: frenchCategory, publish: publishCategory})
            setCategoryMounted(true)
        }

    }, [categoryData])

    useEffect(()=>{
        setIsGerman(locale=="de")
        if (localData && localData.length > 0){
            // console.log("it's open")
            setInfoBoxOpen(true)
        }else{
            setInfoBoxOpen(false)
        }
        
        // console.log(isGerman)
        // console.log(infoBoxOpen)
        // console.log("German: ", germanData)
        // console.log("French: ", frenchData)
        // console.log("Data: ", data)
        // console.log("localData: ", localData)
        // console.log("germanID: ", categoryId.german)

        
    }, [isGerman, localData])
    


    if (categoryError || error){
        console.log("Error with loading data")
        return <></>
    }
    

    if (!frenchData || !germanData){
        return <></>
    }

    return(
        <>
                        
        {/* <Flex w="45vw" h="70vh" mt="5vh" pos="relative" align="center" justify="center" className={classes.container}> */}
        {/* <Flex w="40vw" h="70vh" style={{backgroundColor:"transparent"}}> */}
            {infoBoxOpen &&
                
                // <motion.div className={classes.paper} >
                //     <ActionIcon variant="transparent" color="black" className={classes.iconX} onClick={()=>{setInfoBoxOpen(false)}}><RxCross1 size="1.5rem"/></ActionIcon>
                //     <ScrollArea  w="40vw" offsetScrollbars>
                //         <TypographyStylesProvider>
                //             {localData!.map((post: typeof germanData, i:number) => (
                //                 <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} key={i}/>
                //                 )
                //             )}
                //         </TypographyStylesProvider>
                //     </ScrollArea>
                // </motion.div>

                <svg width="50vw" height="70vh" viewBox="250 100 1800 1800" xmlns="http://www.w3.org/2000/svg"
                    style={{alignSelf: "start"}}
                >
            
                <g id="A4 - 1">
                <g id="speech">
                    <foreignObject x= "300" y= "500" width="1500" height="800">
                        <ScrollArea  w="600" h="100%" offsetScrollbars>
                                <TypographyStylesProvider>
                                    {localData!.map((post: typeof germanData, i:number) => (
                                    <div className={classes.provider} dangerouslySetInnerHTML={{ __html: post.content.rendered }} key={i}/>
                                    )
                                )}
                            </TypographyStylesProvider>
                        </ScrollArea>
                    </foreignObject>
                <path id="Vector" d="M318.546 491H1746.45C1763.3 491.03 1779.45 499.343 1791.36 514.118C1803.27 528.893 1809.98 548.923 1810 569.818V1279.18C1809.98 1300.08 1803.27 1320.11 1791.36 1334.88C1779.45 1349.66 1763.3 1357.97 1746.45 1358H1645.53V1613H1641.79C1601.16 1612.95 1562.2 1592.9 1533.47 1557.26C1504.74 1521.63 1488.58 1473.31 1488.53 1422.91V1358H318.546C301.7 1357.97 285.551 1349.66 273.639 1334.88C261.727 1320.11 255.024 1300.08 255 1279.18V569.818C255.024 548.923 261.727 528.893 273.639 514.118C285.551 499.343 301.7 491.03 318.546 491ZM262.476 1279.18C262.494 1297.62 268.407 1315.3 278.918 1328.33C289.43 1341.37 303.681 1348.7 318.546 1348.73H1496.01V1422.91C1496.06 1470.04 1510.93 1515.3 1537.45 1549.05C1563.98 1582.81 1600.06 1602.41 1638.05 1603.68V1348.73H1746.45C1761.32 1348.7 1775.57 1341.37 1786.08 1328.33C1796.59 1315.3 1802.51 1297.62 1802.52 1279.18V569.818C1802.51 551.38 1796.59 533.704 1786.08 520.667C1775.57 507.629 1761.32 500.295 1746.45 500.273H318.546C303.681 500.295 289.43 507.629 278.918 520.667C268.407 533.704 262.494 551.38 262.476 569.818V1279.18Z" fill="#3F3D56"/>
                </g>
                <g id="human">
                <path id="Vector_2" d="M1790.87 1771.31C1791.56 1771.31 1792.26 1771.26 1792.95 1771.17C1795.34 1770.88 1797.63 1770.07 1799.69 1768.81C1801.74 1767.55 1803.51 1765.87 1804.88 1763.87C1806.25 1761.87 1807.19 1759.6 1807.63 1757.2C1808.07 1754.81 1808.01 1752.35 1807.45 1749.98C1807.32 1749.43 1807.16 1748.88 1806.97 1748.35L1858.66 1681.24C1860.94 1678.26 1862.21 1674.62 1862.28 1670.85C1862.35 1667.08 1861.22 1663.39 1859.07 1660.33L1840.96 1634.82L1817.29 1653.34L1826.8 1669.91L1789.15 1736.84C1788.39 1736.91 1787.64 1737.03 1786.9 1737.21C1782.85 1738.2 1779.29 1740.66 1776.9 1744.13C1774.52 1747.6 1773.47 1751.84 1773.96 1756.04C1774.44 1760.24 1776.44 1764.12 1779.55 1766.93C1782.67 1769.74 1786.69 1771.3 1790.87 1771.31Z" fill="#A0616A"/>
                <path id="Vector_3" d="M1701.41 2089.32L1682.42 2089.32L1673.38 2015.02L1701.41 2015.02L1701.41 2089.32Z" fill="#A0616A"/>
                <path id="Vector_4" d="M1645.79 2107.2L1705.48 2107.2L1705.48 2083.81L1668.85 2083.81C1665.82 2083.81 1662.82 2084.42 1660.02 2085.59C1657.23 2086.77 1654.68 2088.49 1652.54 2090.66C1650.4 2092.83 1648.7 2095.41 1647.54 2098.25C1646.38 2101.09 1645.79 2104.13 1645.79 2107.2Z" fill="#2F2E41"/>
                <path id="Vector_5" d="M1857.88 2089.32L1838.89 2089.32L1829.86 2015.02L1857.89 2015.02L1857.88 2089.32Z" fill="#A0616A"/>
                <path id="Vector_6" d="M1802.26 2107.2L1861.95 2107.2L1861.95 2083.81L1825.32 2083.81C1822.3 2083.81 1819.3 2084.42 1816.5 2085.59C1813.7 2086.77 1811.16 2088.49 1809.02 2090.66C1806.87 2092.83 1805.17 2095.41 1804.02 2098.25C1802.86 2101.09 1802.26 2104.13 1802.26 2107.2Z" fill="#2F2E41"/>
                <path id="Vector_7" d="M1846.23 1638.44L1803.58 1654.88L1793.17 1625.55C1791.79 1621.65 1791.81 1617.39 1793.23 1613.51C1794.65 1609.63 1797.37 1606.38 1800.92 1604.34C1804.52 1602.27 1808.72 1601.58 1812.77 1602.38C1816.82 1603.18 1820.46 1605.43 1823.02 1608.71L1846.23 1638.44Z" fill="#83CDF3"/>
                <path id="Vector_8" d="M1704.79 2029.34C1706.49 2029.34 1708.14 2028.76 1709.49 2027.7C1710.83 2026.64 1711.79 2025.16 1712.21 2023.49C1733.47 1940.98 1755.07 1899.62 1778.22 1851.8C1778.8 1850.61 1779.74 1849.64 1780.9 1849.02C1782.06 1848.41 1783.39 1848.19 1784.68 1848.39C1785.98 1848.59 1787.17 1849.21 1788.1 1850.15C1789.03 1851.09 1789.63 1852.31 1789.83 1853.62L1818.53 2021.82C1818.82 2023.69 1819.76 2025.4 1821.2 2026.62C1822.63 2027.84 1824.46 2028.49 1826.33 2028.45L1868.94 2027.39C1869.97 2027.37 1870.99 2027.14 1871.93 2026.71C1872.87 2026.27 1873.72 2025.65 1874.42 2024.88C1875.15 2024.14 1875.72 2023.24 1876.07 2022.24C1876.42 2021.25 1876.54 2020.19 1876.44 2019.15C1857.14 1890.08 1841.95 1773.25 1812.73 1737.61C1811.92 1736.83 1810.99 1736.19 1809.98 1735.71L1810.86 1735.57C1811.12 1735.53 1811.79 1735.43 1811.8 1734.74L1811.81 1734.08L1811.14 1733.95C1810.08 1733.91 1809.02 1734.07 1808.01 1734.43L1741.32 1744.84C1739.48 1745.12 1737.79 1746.08 1736.59 1747.54C1735.39 1748.99 1734.75 1750.83 1734.79 1752.73C1731.17 1769.93 1725.61 1795.89 1725.12 1797.17C1689.54 1865.77 1675.73 1919.79 1661.38 2012.04C1661.08 2014 1661.53 2015.99 1662.62 2017.63C1663.72 2019.27 1665.38 2020.43 1667.28 2020.87L1703.05 2029.14C1703.62 2029.27 1704.2 2029.34 1704.79 2029.34Z" fill="#2F2E41"/>
                <path id="Vector_9" d="M1742.21 1756.08C1742.81 1756.08 1743.4 1756.01 1743.99 1755.87L1809.64 1740.03C1810.65 1739.79 1811.6 1739.35 1812.43 1738.72C1813.26 1738.1 1813.95 1737.31 1814.47 1736.4C1815 1735.47 1815.34 1734.43 1815.47 1733.35C1815.6 1732.28 1815.52 1731.19 1815.22 1730.15C1808.14 1705.25 1817.42 1674.39 1828.51 1644.76C1829.92 1636.09 1828.54 1627.19 1824.57 1619.38C1820.6 1611.57 1814.26 1605.27 1806.48 1601.41L1806.3 1601.32L1771.83 1603.08C1766.17 1604.59 1760.92 1607.38 1756.48 1611.24C1752.03 1615.09 1748.5 1619.93 1746.16 1625.36C1732.88 1656.9 1729.07 1697.37 1734.54 1749.07C1734.74 1751 1735.63 1752.78 1737.05 1754.07C1738.46 1755.36 1740.3 1756.08 1742.21 1756.08Z" fill="#83CDF3"/>
                <path id="Vector_10" d="M1733.38 1684.1C1736.88 1684.11 1740.3 1683 1743.16 1680.94L1768.59 1662.56L1750.44 1638.47L1734.07 1648.04L1668.25 1609.53C1668.19 1608.76 1668.07 1608 1667.9 1607.25C1667.13 1603.92 1665.4 1600.9 1662.93 1598.57C1660.47 1596.24 1657.38 1594.7 1654.05 1594.15C1650.73 1593.6 1647.31 1594.06 1644.25 1595.47C1641.18 1596.89 1638.59 1599.2 1636.82 1602.1C1635.04 1605.01 1634.16 1608.38 1634.28 1611.8C1634.39 1615.22 1635.5 1618.52 1637.47 1621.3C1639.44 1624.07 1642.18 1626.19 1645.33 1627.39C1648.49 1628.59 1651.93 1628.81 1655.21 1628.03C1655.75 1627.9 1656.29 1627.74 1656.81 1627.55L1722.93 1680.44C1725.91 1682.82 1729.59 1684.11 1733.38 1684.1Z" fill="#A0616A"/>
                <path id="Vector_11" d="M1776.66 1670.06L1738.93 1644.05L1756.66 1618.58C1759.01 1615.2 1762.47 1612.77 1766.42 1611.73C1770.37 1610.68 1774.56 1611.08 1778.24 1612.87C1781.97 1614.67 1784.94 1617.76 1786.61 1621.59C1788.29 1625.42 1788.56 1629.72 1787.37 1633.74L1776.66 1670.06Z" fill="#83CDF3"/>
                <path id="Vector_12" d="M1794.8 1588.26C1773.78 1588.26 1756.75 1570.98 1756.75 1549.67C1756.75 1528.36 1773.78 1511.08 1794.8 1511.08C1815.81 1511.08 1832.85 1528.36 1832.85 1549.67C1832.85 1570.98 1815.81 1588.26 1794.8 1588.26Z" fill="#A0616A"/>
                <path id="Vector_13" d="M1791.31 1589.16C1797.02 1589.13 1801.43 1583.03 1801.17 1577.25C1800.92 1571.46 1797.08 1566.37 1792.47 1562.96C1787.85 1559.55 1782.44 1557.47 1777.29 1554.97C1772.14 1552.46 1767.04 1549.33 1763.86 1544.52C1761.94 1541.37 1760.79 1537.8 1760.51 1534.11C1760.24 1530.41 1760.84 1526.71 1762.27 1523.3C1765.23 1516.49 1770.31 1510.84 1776.73 1507.24C1786.27 1501.57 1797.56 1499.76 1808.36 1502.16C1819.16 1504.57 1828.67 1511.01 1834.99 1520.2L1841.51 1538.2C1848.16 1546.3 1849.21 1558.34 1845.13 1568.02C1841.04 1577.71 1832.35 1585 1822.54 1588.47C1812.58 1591.71 1801.93 1592.04 1791.8 1589.4" fill="#2F2E41"/>
                <path id="Vector_14" d="M1832.43 1531.38C1835.03 1527.3 1838.59 1523.94 1842.78 1521.58C1846.97 1519.23 1851.67 1517.96 1856.46 1517.88C1861.25 1517.8 1865.98 1518.92 1870.25 1521.13C1874.51 1523.35 1878.17 1526.6 1880.91 1530.59C1885.48 1537.26 1887.15 1545.5 1890.29 1552.98C1895.99 1566.37 1906.36 1577.17 1919.41 1583.31C1907.98 1585.34 1896.6 1579.45 1887.46 1572.19C1878.32 1564.94 1870.29 1556.08 1860.05 1550.53C1852 1546.18 1842.96 1544.08 1833.84 1544.43" fill="#2F2E41"/>
                <path id="Vector_15" d="M1512.14 2109.56H2102.41C2102.82 2109.56 2103.22 2109.39 2103.51 2109.1C2103.8 2108.8 2103.96 2108.4 2103.96 2107.99C2103.96 2107.57 2103.8 2107.17 2103.51 2106.88C2103.22 2106.58 2102.82 2106.42 2102.41 2106.42H1512.14C1511.73 2106.42 1511.34 2106.58 1511.05 2106.88C1510.76 2107.17 1510.59 2107.57 1510.59 2107.99C1510.59 2108.4 1510.76 2108.8 1511.05 2109.1C1511.34 2109.39 1511.73 2109.56 1512.14 2109.56Z" fill="#3F3D56"/>
                </g>
                </g>
                </svg>

            }
            
        {/* </Flex> */}

       
        </>
    );
}