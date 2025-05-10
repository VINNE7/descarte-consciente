import { Container, Title, Text, Box, useMantineTheme } from "@mantine/core";

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  variant?: "default" | "highlight" | "dark";
  fullWidth?: boolean;
}

export function Section({ id, title, children, variant = "default", fullWidth = false }: SectionProps) {
  const theme = useMantineTheme();

  const getBackgroundColor = () => {
    switch (variant) {
      case "highlight":
        return theme.colors.blue[0];
      case "dark":
        return theme.colors.dark[7];
      default:
        return "transparent";
    }
  };

  const getTextColor = () => {
    return variant === "dark" ? theme.white : theme.black;
  };

  return (
    <Box
      id={id}
      py="xl"
      style={{
        backgroundColor: getBackgroundColor(),
        color: getTextColor(),
      }}
    >
      <Container size={fullWidth ? "xl" : "lg"}>
        {fullWidth ? (
          children
        ) : (
          <div>
            <Title
              order={2}
              mb="md"
              style={{
                color: variant === "dark" ? theme.white : theme.colors.blue[7],
                fontSize: "2.5rem",
                fontWeight: 700,
              }}
            >
              {title}
            </Title>
            <Text
              size="lg"
              style={{
                lineHeight: 1.8,
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              {children}
            </Text>
          </div>
        )}
      </Container>
    </Box>
  );
}
