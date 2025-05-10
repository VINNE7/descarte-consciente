import React from 'react';
import { Container, Title, Text, SimpleGrid, Paper, Stack, rem } from '@mantine/core';

const Map: React.FC = () => {
  return (
    <Container size="xl" py="xl" px={0}>
      <Stack gap="xl">
        <Title order={2} ta="center" mb="xl">
          Pontos de Descarte de Medicamentos em Cuiabá
        </Title>
        
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
          {/* UBS Section */}
          <Paper shadow="md" p="md" radius="md" withBorder>
            <Stack gap="xs">
              <Title order={3} c="blue.6" size="h4">
                Unidades Básicas de Saúde (UBS)
              </Title>
              <Text size="sm" c="dimmed" mb="xs">
                As UBS são pontos de coleta autorizados para descarte de medicamentos. 
                Procure a unidade mais próxima de você para fazer o descarte correto dos seus 
                medicamentos vencidos ou em desuso, contribuindo para a preservação do meio ambiente 
                e da saúde pública.
              </Text>
              <div style={{ 
                width: '100%', 
                height: rem(800),
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '8px',
              }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d61484.7956422326!2d-56.06618550620505!3d-15.602345550616489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1subs%20cuiab%C3%A1!5e0!3m2!1spt-BR!2sbr!4v1746743365495!5m2!1spt-BR!2sbr"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 0,
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Stack>
          </Paper>

          {/* Drugstores Section */}
          <Paper shadow="md" p="md" radius="md" withBorder>
            <Stack gap="xs">
              <Title order={3} c="green.6" size="h4">
                Farmácias e Drogarias
              </Title>
              <Text size="sm" c="dimmed" mb="xs">
                As farmácias são pontos estratégicos para o descarte de medicamentos. 
                De acordo com a Lei Municipal nº 5.678/13, todas as farmácias devem manter 
                recipientes próprios para coleta. Encontre a farmácia mais próxima para 
                descartar seus medicamentos de forma segura e responsável.
              </Text>
              <div style={{ 
                width: '100%', 
                height: rem(800),
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '8px',
              }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d61484.847488353276!2d-56.0663572239842!3d-15.602172536451981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sfarm%C3%A1cias%20em%20Cuiab%C3%A1%20-%20MT!5e0!3m2!1spt-BR!2sbr!4v1746743457421!5m2!1spt-BR!2sbr"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 0,
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Stack>
          </Paper>
        </SimpleGrid>
      </Stack>
    </Container>
  );
};

export default Map;
