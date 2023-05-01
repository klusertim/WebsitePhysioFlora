
import { Flex, Image, Space, Stack, Title, Text, MediaQuery } from "@mantine/core";
import { TeamDataType } from "./team.data";
import { useRouter } from "next/router";
import { useMediaQuery } from "@mantine/hooks";

export default function TeamElementBig({data : {image, name, description}} : {data: TeamDataType}){
    const {locale} : {locale?: string} = useRouter();
    const matches = useMediaQuery('(min-width: "xl")');

    const children =    <>
                        <Flex miw={200} maw={200} align="center" justify="center">
                            <Image src={`team/${image}.png`}/>
                        </Flex>
                            <Space w="lg"/>
                                
                            <Stack justify="flex-start">
                                <Title order={3}>{name}</Title>
                                <Text>
                                    {locale=="fr" ? description.fr : description.de}
                                </Text>
                            </Stack>
                        </>
                    

    return(
        <>
            <MediaQuery smallerThan="lg" styles={{justifyContent: "flex-start"}}>
                <Flex justify="center" align="flex-start" wrap="nowrap" >
                    {children}
                </Flex>
            </MediaQuery>

        </>
    );
}