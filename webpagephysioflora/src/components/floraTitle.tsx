import { Stack, Text, Title, createStyles } from "@mantine/core";
import { useRouter } from "next/router";

interface TextProps{
    title: {
        de: string,
        fr: string
    },
    speech: {
        de: string,
        fr: string
    }
}

const useStyles = createStyles((theme) => ({
    title:{
        color: theme.colors.pink,
        fontWeight: "bold"
    }
  }));

export default function FloraTitle({title, speech}: TextProps){
    const {locale} : {locale?: string} = useRouter();
    const {classes} = useStyles();

    return(
        <Stack align="flex-start" ml="10vw" pl={0} pb="md">
                <Text className={classes.title}>{title[locale! as keyof typeof title].toUpperCase()}</Text>
                <Title mt={-10}>{speech[locale! as keyof typeof speech]}</Title>
        </Stack>  
    )
}