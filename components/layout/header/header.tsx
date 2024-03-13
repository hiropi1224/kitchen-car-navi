import { Flex, Title } from "@mantine/core";
import { UserRound } from "lucide-react";
import { josefinSans } from "~/lib/font";

export function Header() {
  return (
    <Flex justify="space-between" p="sm">
      <Title
        className={josefinSans.className}
        style={{ textTransform: "capitalize" }}
        order={1}
      >
        kitchen car navi
      </Title>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <UserRound size={30} />
      </div>
    </Flex>
  );
}
