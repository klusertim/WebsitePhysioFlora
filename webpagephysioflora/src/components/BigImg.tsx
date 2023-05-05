import { createStyles, Image, MediaQuery } from "@mantine/core"

const useStyles = createStyles((theme) => ({
    container: {
        backgroundImage: 'url("PhysioWallpaper.jpg")',
        backgroundPositionX: "50%",
        backgroundPositionY: "0%",
        backgroundSize: "cover",
        height: "500px",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        position: "relative",
        zIndex: 1
    }
    
  }));

export default function BigImg({url}: {url: string}){
    const {classes} = useStyles();

    return(
        // <Image className={classes.img} src="PhysioWallpaper.jpg" alt="wallpaper" width="100%" height={500}/>
        <>
        <MediaQuery
            smallerThan="sm"
            styles={{display: "none"}}
        >
            <div className={classes.container}/>
        </MediaQuery>
        <MediaQuery
            largerThan="sm"
            styles={{display: "none"}}
        >
            <Image src={url}/>
        </MediaQuery>
        </>
    )
}