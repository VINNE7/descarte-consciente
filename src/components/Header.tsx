import { Anchor, Box, Container, Group, rem, Text, Image, Burger, Drawer, Stack, UnstyledButton } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useState } from "react";

export function AppHeader() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [opened, setOpened] = useState(false);

  const navItems = [
    { href: "#inicio", label: "Início" },
    { href: "#descartar", label: "Por que Descartar?" },
    { href: "#lei", label: "A Lei e Pontos" },
    { href: "#mapas", label: "Mapa" },
  ];

  const handleNavClick = (href: string) => {
    setOpened(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      component="header"
      bg="white"
      py="md"
      px="md"
      style={{
        borderBottom: `1px solid #e0e0e0`,
        position: "sticky",
        top: 0,
        zIndex: 10,
        boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
      }}
    >
      <Container size="lg">
        <Group justify="space-between" align="center">
          <Group gap="xs">
            <Image
              src="/descarte-consciente/medicine-icon.svg"
              alt="Medicine Icon"
              width={32}
              height={32}
              fallbackSrc="https://placehold.co/32x32"
            />
            <Text
              size="xl"
              fw={700}
              variant="gradient"
              gradient={{ from: "blue", to: "cyan", deg: 90 }}
            >
              Descarte Consciente
            </Text>
          </Group>

          {isMobile ? (
            <>
              <Burger
                opened={opened}
                onClick={() => setOpened(!opened)}
                size="sm"
                color="gray"
              />
              <Drawer
                opened={opened}
                onClose={() => setOpened(false)}
                size="100%"
                padding="md"
                title="Menu"
                zIndex={1000}
              >
                <Stack gap="md">
                  {navItems.map((item) => (
                    <UnstyledButton
                      key={item.href}
                      onClick={() => handleNavClick(item.href)}
                      style={{
                        padding: rem(12),
                        borderRadius: rem(8),
                        transition: "background-color 0.2s",
                        "&:hover": {
                          backgroundColor: "rgba(0, 0, 0, 0.05)",
                        },
                      }}
                    >
                      <Text size="lg" fw={500}>
                        {item.label}
                      </Text>
                    </UnstyledButton>
                  ))}
                </Stack>
              </Drawer>
            </>
          ) : (
            <Group gap={rem(32)}>
              {navItems.map((item) => (
                <Anchor
                  key={item.href}
                  href={item.href}
                  underline="hover"
                  style={{ fontWeight: 500 }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                >
                  {item.label}
                </Anchor>
              ))}
            </Group>
          )}
        </Group>
      </Container>
    </Box>
  );
}
