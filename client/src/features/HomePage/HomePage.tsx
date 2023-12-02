import { Stack, Title } from "@mantine/core";
import RecipeConverter from "../Converter/RecipeConverter";

export default function HomePage() {
  return (
    <Stack>
      <Title>Oven to Air Fryer Recipe Calculator</Title>
      <RecipeConverter />
    </Stack>
  );
}
