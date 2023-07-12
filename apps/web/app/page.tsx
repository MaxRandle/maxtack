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
        <Container>
          <Badge>1</Badge>
          <Typography className="mt-20">fish</Typography>
          <ButtonGroup>
            <Button>cat</Button>
            <Button>dog</Button>
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
