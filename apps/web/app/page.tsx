"use client";

import { useFindPetsByStatus } from "api";
import {
  Alert,
  Badge,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Container,
  Section,
  Typography,
} from "ui";

export default function Page() {
  const { data, isLoading, error } = useFindPetsByStatus({
    queryParams: {
      status: "available",
    },
  });

  return (
    <>
      <Section>
        <Container className="space-y-6">
          <Card>
            <CardContent>
              <Badge>+100</Badge>
              <Typography>doggo boop the snoot</Typography>
              <ButtonGroup>
                <Button intent="secondary">cat</Button>
                <Button intent="secondary">dog</Button>
              </ButtonGroup>
            </CardContent>
          </Card>
        </Container>
      </Section>

      <Section palette="primary">
        <Container className="space-y-6">
          <Card>
            <CardContent>
              <Typography>Shark</Typography>
              <Typography>Octopus</Typography>
              <Typography>Jellyfish</Typography>
            </CardContent>
          </Card>
          <pre>
            <Typography palette="primary">
              {isLoading ? (
                "LOADING!!!!!!!!!!!!!!!!"
              ) : (
                <code>{JSON.stringify(data, null, 2)}</code>
              )}
              {error ? <>{(error as any).stack.message}</> : null}
            </Typography>
          </pre>
        </Container>
      </Section>

      <Section>
        <Container>
          <Alert title="doi" status="success">
            cowdoi
          </Alert>
        </Container>
      </Section>
    </>
  );
}
