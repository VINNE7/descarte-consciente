import { Section } from "../components/Section";
import {
  Card,
  Image,
  Text,
  Group,
  Button,
  Container,
  Title,
  SimpleGrid,
  ThemeIcon,
  Stack,
} from "@mantine/core";
import Map from "../components/Map";

const impactCards = [
  {
    title: "Proteção Ambiental",
    description:
      "Evita a contaminação do solo e água, protegendo ecossistemas inteiros.",
    color: "green",
  },
  {
    title: "Saúde Pública",
    description:
      "Reduz riscos de intoxicação e previne a automedicação indevida.",
    color: "blue",
  },
  {
    title: "Pontos de Coleta",
    description: "Facilidade de acesso a locais apropriados para descarte.",
    color: "orange",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Section
        id="inicio"
        title="Descarte Consciente de Medicamentos"
        variant="dark"
      >
        <Container size="lg">
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
            <div>
              <Title order={1} size="h2" mb="md">
                Proteja o Meio Ambiente e a Saúde Pública
              </Title>
              <Text size="lg" mb="xl">
                O descarte correto de medicamentos é essencial para preservar
                nosso meio ambiente e garantir a segurança de todos. Cada
                pequena ação faz uma grande diferença.
              </Text>
              <Button
                size="lg"
                variant="gradient"
                gradient={{ from: "blue", to: "cyan" }}
              >
                Encontrar Pontos de Coleta
              </Button>
            </div>
            <Image
              src="/medicine-disposal.jpg"
              alt="Descarte de medicamentos"
              radius="md"
              fallbackSrc="https://placehold.co/600x400"
            />
          </SimpleGrid>
        </Container>
      </Section>

      {/* Impact Cards */}
      <Section id="impacto" title="Impacto do Descarte Consciente">
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="md">
          {impactCards.map((card) => (
            <Card key={card.title} shadow="sm" padding="lg" radius="md" withBorder>
              <Stack gap="sm">
                <Group align="center">
                  <ThemeIcon size="lg" radius="md" variant="light" color={card.color}>
                    {card.title[0]}
                  </ThemeIcon>
                  <Text fw={500} style={{ lineHeight: 1 }}>{card.title}</Text>
                </Group>
                <Text size="sm" c="dimmed">
                  {card.description}
                </Text>
              </Stack>
            </Card>
          ))}
        </SimpleGrid>
      </Section>

      {/* Why Section */}
      <Section
        id="descartar"
        title="Por que Descartar Corretamente?"
        variant="highlight"
      >
        <Container size="lg">
          <Text size="lg" mb="xl">
            O descarte incorreto de medicamentos é uma prática comum, mas extremamente nociva. 
            Jogar medicamentos no lixo comum ou no vaso sanitário libera substâncias químicas perigosas, 
            contaminando o solo, a água e ameaçando a saúde pública.
          </Text>
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Title order={3} mb="md">
                Riscos Ambientais
              </Title>
              <ul>
                <li>Contaminação do solo e lençóis freáticos</li>
                <li>Poluição de rios e oceanos</li>
                <li>Desequilíbrio de ecossistemas</li>
                <li>Impacto na vida aquática</li>
              </ul>
            </Card>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Title order={3} mb="md">
                Riscos à Saúde
              </Title>
              <ul>
                <li>Intoxicação acidental</li>
                <li>Resistência bacteriana</li>
                <li>Automedicação indevida</li>
                <li>Riscos para crianças e idosos</li>
              </ul>
            </Card>
          </SimpleGrid>
        </Container>
      </Section>

      {/* Law Section */}
      <Section id="lei" title="A Lei e Pontos de Descarte">
        <Container size="lg">
          <Text size="lg" mb="xl">
            Em Cuiabá, a Lei Municipal nº 5.678/13, sancionada em agosto de 2013 pelo então prefeito Mauro Mendes 
            (atual governador do estado de Mato Grosso), foi criada com o objetivo de regulamentar o descarte adequado 
            de medicamentos. A autoria da lei é do vereador Marcrean Santos, que destacou a preocupação com a proteção 
            dos lençóis freáticos e a preservação do meio ambiente.
          </Text>
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Title order={3} mb="md">
                Obrigações
              </Title>
              <ul>
                <li>Farmácias devem manter recipientes próprios para coleta</li>
                <li>Coletores devem ser resistentes e invioláveis</li>
                <li>Supervisão por farmacêuticos</li>
                <li>Logística reversa responsável</li>
                <li>Áreas de fácil visualização</li>
              </ul>
            </Card>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Title order={3} mb="md">
                Penalidades
              </Title>
              <ul>
                <li>Multas de R$ 1.000 a R$ 100.000</li>
                <li>Valores dobrados em caso de reincidência</li>
                <li>Penalidades diárias por irregularidades persistentes</li>
                <li>Responsabilidade compartilhada entre fabricantes e distribuidores</li>
              </ul>
            </Card>
          </SimpleGrid>
        </Container>
      </Section>

      {/* Maps Section */}
      <Section id="mapas" title="Encontre os Locais de Atendimento" fullWidth>
        <Map />
      </Section>
    </>
  );
}
