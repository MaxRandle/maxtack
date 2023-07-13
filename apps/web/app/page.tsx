"use client";

import { Badge } from "ui/components/Badge";
import { Button, ButtonGroup } from "ui/components/Button";
import { Container } from "ui/components/Container";
import { Section } from "ui/components/Section";
import { Typography } from "ui/components/Typography";

import { useFindPetsByStatus } from "api";

export default function Page() {
  const { data, isLoading, error } = useFindPetsByStatus({
    queryParams: {
      status: "available",
    },
  });

  return (
    <>
      <Section>
        <Container className="space-y-6 ">
          <Badge>1</Badge>
          <Typography>fish</Typography>
          <ButtonGroup>
            <Button intent="secondary">cat</Button>
            <Button intent="secondary">dog</Button>
          </ButtonGroup>

          {isLoading ? (
            "LOADING!!!!!!!!!!!!!!!!"
          ) : (
            <pre>
              <code>{JSON.stringify(data, null, 2)}</code>
            </pre>
          )}
          {error ? <>{(error as any).stack.message}</> : null}
        </Container>
      </Section>
    </>
  );
}
