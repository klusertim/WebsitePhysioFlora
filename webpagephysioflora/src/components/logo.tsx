import { Stack, Group } from "@mantine/core"
import Image from "next/image"
import flora from "public/FLORA.svg"
import physio from "public/PHYSIOTHERAPIE.svg"
import logoSrc from 'public/logoMiddle.svg'


interface Props{
    className: string
}

export default function Logo() {
    return(
        <Group
            spacing= "xs"
            noWrap
        >
            <Stack
            spacing="xs"
            >
                <Image src={flora} alt="Flora"/>
                <Image src={physio} alt= "Physiotherapie"/>
            </Stack>
            <Image src={logoSrc} alt="Logo"/>
        </Group>
    )
}