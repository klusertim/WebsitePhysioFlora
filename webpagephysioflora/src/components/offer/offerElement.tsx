import { Card, Group, createStyles, Text, Flex, Title, Button, Modal, MediaQuery } from "@mantine/core";
import { useRouter } from "next/router";
import { useState } from "react";

interface Data{
    title:{
        fr: string
        de: string
    },
    description: {
        fr: string
        de: string
    }
}

const useStyles = createStyles((theme) => ({
   
}));



export default function OfferElement({title, description}: Data){

    const {classes} = useStyles();
    const {locale} : {locale?: string} = useRouter();
    const [modalOpen, setModalOpen] = useState(false);

  function BarbellSVG(){
    return(
        // <Flex w={50} h={50}>
        <svg width="70" height="70" viewBox="0 0 195 141" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Frame 2">
        <rect width="195" height="141" fill="white"/>
        <g id="BlobSmall">
        <path id="Vector" d="M147.431 35.4785C160.723 49.5296 174.882 56.7251 178.189 66.5836C181.495 76.4704 173.981 89.0484 168.537 101.881C163.094 114.714 159.754 127.802 150.236 134.743C140.685 141.712 124.989 142.562 112.532 138.766C100.076 134.969 90.8918 126.527 79.604 120.068C68.3496 113.581 54.9913 109.049 43.5365 99.2468C32.1151 89.4733 22.5973 74.4023 27.1725 63.4957C31.7812 52.6174 50.5162 45.8752 66.5463 32.5889C82.6097 19.3027 95.9346 -0.527518 108.825 0.0107306C121.716 0.548979 134.173 21.4274 147.431 35.4785Z" fill="#B797E5" fillOpacity="0.5"/>
        </g>
        <g id="Barbell">
        <rect id="Rectangle 7" x="81.9036" y="40.637" width="1.96154" height="59.726" rx="0.980769" stroke="black" strokeWidth="1.96154"/>
        <rect id="Rectangle 10" x="77.9813" y="47.2464" width="1.96154" height="46.5072" rx="0.980769" stroke="black" strokeWidth="1.96154"/>
        <rect id="Rectangle 11" x="74.0579" y="56.0589" width="1.96154" height="28.8822" rx="0.980769" stroke="black" strokeWidth="1.96154"/>
        <rect id="Rectangle 12" x="132.904" y="40.637" width="1.96154" height="59.726" rx="0.980769" stroke="black" strokeWidth="1.96154"/>
        <rect id="Rectangle 13" x="136.827" y="47.2464" width="1.96154" height="46.5072" rx="0.980769" stroke="black" strokeWidth="1.96154"/>
        <rect id="Rectangle 14" x="140.75" y="56.0589" width="1.96154" height="28.8822" rx="0.980769" stroke="black" strokeWidth="1.96154"/>
        <rect id="Rectangle 9" x="85.9478" y="71.6016" width="2.20312" height="44.8738" transform="rotate(-90 85.9478 71.6016)" stroke="black" strokeWidth="2.20312"/>
        </g>
        </g>
        </svg>
        
    )
  }

  return(
    <>
        <Modal opened={modalOpen} onClose={() => setModalOpen(false)}>
            <Card radius="md" p="lg" pl={0}>
                    <Group noWrap>
                        <Flex w={100} h={100} align="center" justify="center">
                            <BarbellSVG/>
                        </Flex>
                        <Text size="xl" weight={700}>{locale == "fr" ? title.fr : title.de}</Text>
                    </Group>
                <Text size="sm" color="dimmed">
                    {locale == "fr" ? description.fr : description.de}
                </Text>
            </Card>
        </Modal>

        <Flex p="lg" pl={0} direction="column" align="center">
            <MediaQuery
                query="(max-width: 370px)"
                styles={{flexWrap: "wrap"}}
            >
            <Group noWrap>
                <Flex w={100} h={100} align="center" justify="center">
                    <BarbellSVG/>
                </Flex>
                <Text size="lg" weight={700} pr="lg" style={{wordWrap: "break-word"}}>{locale == "fr" ? title.fr : title.de}</Text>
            </Group>
            </MediaQuery>
            <Text size="sm" color="dimmed">
                {locale == "fr" ? description.fr : description.de}
            </Text>
            <Flex w="100%" justify="center" pt={5}>
                <Button onClick={() => setModalOpen(true)} compact size="xs" variant="outline" radius="lg" color="gray"> 
                    {locale == "fr" ? "lire plus" : "mehr erfahren"}
                </Button>
            </Flex>
        </Flex>
    </>
  )
}