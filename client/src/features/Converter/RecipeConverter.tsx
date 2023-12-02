import {
  Button,
  Center,
  NumberInput,
  SegmentedControl,
  Flex,
  Text,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";

export default function RecipeConverter() {
  const inputForm = useForm({
    initialValues: {
      temp: 200,
      tempUnit: "°C",
      timeInMins: 20,
    },
  });
  const [output, SetOutput] = useState<string>("");
  function updateOutput(values: {
    temp: number;
    tempUnit: string;
    timeInMins: number;
  }): void {
    const convertedTime = values.timeInMins * 0.8;
    const convertedTemp =
      values.tempUnit === "°C" ? values.temp - 20 : values.temp - 36;

    SetOutput(
      `Cook for ${convertedTime} Minutes at ${Math.round(convertedTemp)}${
        values.tempUnit
      }`
    );
  }

  return (
    <Center h="100vh">
      <Flex wrap="wrap" gap="xl" justify="center">
        <form onSubmit={inputForm.onSubmit((values) => updateOutput(values))}>
          <NumberInput
            label="Temperature"
            placeholder="E.g. 200"
            suffix="°C"
            step={5}
            defaultValue={200}
            {...inputForm.getInputProps("temp")}
          />
          <SegmentedControl
            data={["°C", "°F"]}
            {...inputForm.getInputProps("tempUnit")}
          />
          <NumberInput
            label="Time (Minutes)"
            placeholder="E.g. 20"
            suffix=" Minutes"
            defaultValue={20}
            {...inputForm.getInputProps("timeInMins")}
          />
          <Button type="submit">Calculate</Button>
        </form>
        <Text p="150">{output}</Text>
      </Flex>
    </Center>
  );
}
