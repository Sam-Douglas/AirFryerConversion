import { Button, Center, NumberInput, SegmentedControl } from "@mantine/core";

export default function RecipeConverter() {
    return (
        <Center h="100vh">
            <form>
                <NumberInput label="Temperature" placeholder="E.g. 200" suffix="°C" step={5} defaultValue={200}/>
                <SegmentedControl data={["°C", "°F"]}/>
                <NumberInput label="Time (Minutes)" placeholder="E.g. 20" suffix=" Minutes" defaultValue={20}/>
                <Button type="submit">Calculate</Button>
            </form>
        </Center>
    )
}