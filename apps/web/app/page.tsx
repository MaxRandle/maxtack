"use client";

import { Petstore, Rewards } from "api";
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

const { useFindPetsByStatus } = Petstore;
const { useAchievement } = Rewards;

export default function Page() {
  const {
    data: petData,
    isLoading: petIsLoading,
    error: petError,
  } = useFindPetsByStatus({
    queryParams: {
      status: "available",
    },
  });

  const {
    data: rewardData,
    isLoading: rewardIsLoading,
    error: rewardError,
  } = useAchievement({
    queryParams: {
      achievement: "LEVEL_UP_TO_1",
    },
  });

  console.log(rewardData);

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
              {petIsLoading ? (
                "PET LOADING..."
              ) : (
                <code>{JSON.stringify(petData, null, 2)}</code>
              )}
              {petError ? <>{(petError as any).stack.message}</> : null}
            </Typography>
          </pre>
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
              {rewardIsLoading ? (
                "REWARD LOADING..."
              ) : (
                <code>{JSON.stringify(rewardData, null, 2)}</code>
              )}
              {rewardError ? <>{(rewardError as any).stack.message}</> : null}
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
