"use client";

import { FiArrowLeft, FiArrowRight, FiPlus } from "react-icons/fi";

import {
  fadeAndSlideInFromLeft,
  fadeAndSlideInFromRight,
} from "@/utils/animations";
import { motion } from "framer-motion";
import {
  Alert,
  Avatar,
  AvatarContainer,
  AvatarGroup,
  Badge,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Container,
  Heading,
  Input,
  InputAdornment,
  InputGroup,
  Section,
  SplitContainer,
  SplitItem,
  Typography,
} from "ui";
import { Palette } from "@/components/misc/Palette";
import { twMerge } from "tailwind-merge";
import React from "react";
import { AppNavHeader } from "@/components/composite/AppNavHeader";

export default function Page() {
  const MotionSplitContainer = motion(SplitContainer);
  const MotionSplitItem = motion(SplitItem);

  // throw an error if query params are found
  if (typeof window !== "undefined") {
    if (window.location.search) {
      throw new Error(
        "This page does not accept query parameters. Please remove them and try again."
      );
    }
  }

  return (
    <>
      <AppNavHeader />
      <main className="min-h-screen overflow-hidden bg-white dark:bg-black">
        <Section>
          <Palette />
        </Section>

        <Section className="space-y-2">
          {[
            "bg-base-100",
            "bg-base-200",
            "bg-base-300",
            "bg-base-400",
            "bg-base-500",
            "bg-base-600",
            "bg-base-700",
            "bg-base-800",
            "bg-base-900",
            "bg-base-1000",
            "bg-base-1100",
            "bg-base-1200",
            "bg-base-1300",
          ]
            .reverse()
            .map((color) => (
              <Container key={color}>
                <div className={twMerge("w-full h-20 rounded-lg", color)}></div>
              </Container>
            ))}
        </Section>

        <Section>
          <Container>
            {(["base", "weak", "weaker", "primary"] as const).map((palette) => (
              <React.Fragment key={palette}>
                <Heading level="h1" palette={palette}>
                  Lorem ipsum
                </Heading>
                <Typography level="subheading" palette={palette}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Deleniti natus esse et excepturi exercitationem veritatis
                  omnis totam quibusdam laboriosam voluptas quasi accusantium
                  commodi aperiam eum, sit ipsam ex voluptatibus quos? Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Ratione
                  culpa ducimus laudantium recusandae vel, doloribus quis
                  officiis excepturi adipisci nostrum odio architecto
                  accusantium fugiat necessitatibus, voluptatibus sint debitis,
                  similique ipsa.
                </Typography>
                <br />
              </React.Fragment>
            ))}
          </Container>
        </Section>

        <Section>
          <Container className="space-y-8">
            <AvatarGroup>
              <Avatar
                size="sm"
                src="https://placekitten.com/200/200"
                fallback="CF"
              />
              <Avatar size="sm" fallback="CF" />
              <Avatar
                size="sm"
                src={"https://placekitten.com/240/240"}
                fallback="CF"
              />
              <Avatar size="sm" fallback="+5" />
            </AvatarGroup>
            <AvatarGroup>
              <Avatar
                size="md"
                src="https://placekitten.com/200/200"
                fallback="CF"
              />
              <Avatar size="md" fallback="CF" />
              <Avatar
                size="md"
                src={"https://placekitten.com/240/240"}
                fallback="CF"
              />
              <Avatar size="md" fallback="+5" />
            </AvatarGroup>
            <AvatarGroup>
              <Avatar
                size="lg"
                src="https://placekitten.com/200/200"
                fallback="CF"
              />
              <Avatar size="lg" fallback="CF" />
              <Avatar
                size="lg"
                src={"https://placekitten.com/240/240"}
                fallback="CF"
              />
              <Avatar size="lg" fallback="+5" />
            </AvatarGroup>
          </Container>
        </Section>

        <Section>
          <Container>
            <ul className="space-y-4">
              <li>
                <Button intent="secondary">click</Button>
              </li>
              <li>
                <Button size="lg" intent="primary">
                  clock
                </Button>
              </li>
              <li>
                <Button intent="destructive">clack</Button>
              </li>
              <li>
                <Button disabled>clack</Button>
              </li>
              <li>
                <ButtonGroup>
                  <Button intent="secondary">
                    <FiArrowLeft size={24} />
                  </Button>
                  <Button intent="secondary">
                    <FiPlus size={24} />
                  </Button>
                  <Button intent="secondary">
                    <FiArrowRight size={24} />
                  </Button>
                </ButtonGroup>
              </li>
            </ul>
          </Container>
        </Section>

        <Section>
          <Container>
            <Badge>99+</Badge>
          </Container>
        </Section>

        <Section>
          <Container className="space-y-6">
            {(["high", "low", "flat"] as const).map((elevation) => (
              <Card palette={"surface"} key={elevation} elevation={elevation}>
                <CardContent>
                  <AvatarContainer>
                    <Avatar
                      src="https://placekitten.com/220/220"
                      fallback="CF"
                    />
                    <div>
                      <Heading level="h3">Cat Catterson</Heading>
                      <Typography level="body" palette="weaker">
                        Head of CATering
                      </Typography>
                    </div>
                  </AvatarContainer>
                </CardContent>
              </Card>
            ))}
          </Container>
        </Section>

        <Section>
          <Container className="space-y-4">
            <Alert title="Success alert" status="success">
              Used to give feedback to a user that an action they have just
              taken was successful.
            </Alert>
            <Alert title="Info alert" status="info">
              Used for general non-essential information.
            </Alert>
            <Alert title="Warning alert" status="warning">
              Used to make the user aware of a possible risk or change to normal
              behaviour.
            </Alert>
            <Alert title="Danger alert" status="danger">
              Used to alert a user that an action they have just taken has
              failed, or when it is essential for the user to understand that
              they are about to take an action that is destructive and
              irreversible.
            </Alert>
          </Container>
        </Section>

        <Section>
          <Container className="grid grid-cols-1 flex-col gap-4 sm:grid-cols-2">
            <Input placeholder="example@email.com" />
            <Input value="a" pattern="[0-9]*" />
            <Input disabled value="N/A" />
            <InputGroup>
              <InputAdornment>https://</InputAdornment>
              <Input placeholder="maxrandle.co.nz" />
            </InputGroup>
            <InputGroup className="sm:col-span-2">
              <Input />
              <InputAdornment>to</InputAdornment>
              <Input />
            </InputGroup>
            <InputGroup>
              <InputAdornment>$</InputAdornment>
              <Input />
            </InputGroup>
            <InputGroup>
              <Input />
              <InputAdornment>kg</InputAdornment>
            </InputGroup>
          </Container>
        </Section>

        <Section palette={"surface"}>
          <Container>
            <MotionSplitContainer
              className="mt-20"
              variants={{
                visible: {
                  transition: {
                    delayChildren: 0,
                    staggerChildren: 0.5,
                  },
                },
              }}
              initial="hidden"
              animate="visible"
            >
              <MotionSplitItem
                className="row-span-2"
                side="left"
                variants={fadeAndSlideInFromLeft}
              >
                <Card palette={"base"}>
                  <CardContent>
                    <Typography>1 Left</Typography>
                  </CardContent>
                </Card>
              </MotionSplitItem>
              <MotionSplitItem
                className="row-span-2 row-start-2"
                side="right"
                variants={fadeAndSlideInFromRight}
              >
                <Card palette={"base"}>
                  <CardContent>
                    <Typography>2 Right</Typography>
                  </CardContent>
                </Card>
              </MotionSplitItem>
              <MotionSplitItem
                className="row-span-2"
                side="right"
                variants={fadeAndSlideInFromRight}
              >
                <Card palette={"base"}>
                  <CardContent>
                    <Typography>3 Right</Typography>
                  </CardContent>
                </Card>
              </MotionSplitItem>
              <MotionSplitItem
                className="row-span-2"
                side="left"
                variants={fadeAndSlideInFromLeft}
              >
                <Card palette={"base"}>
                  <CardContent>
                    <Typography>4 Left</Typography>
                  </CardContent>
                </Card>
              </MotionSplitItem>
              <MotionSplitItem
                className="row-span-2"
                side="left"
                variants={fadeAndSlideInFromLeft}
              >
                <Card palette={"base"}>
                  <CardContent>
                    <Typography>5 Left</Typography>
                  </CardContent>
                </Card>
              </MotionSplitItem>
            </MotionSplitContainer>
          </Container>
        </Section>

        <Section>
          <Container className="grid sm:grid-cols-2 gap-8">
            <Card
              palette={"gradient"}
              elevation={"flat"}
              className="max-w-xs sm:max-w-full w-full mx-auto aspect-square overflow-hidden flex items-center justify-center"
            >
              <div className="size-60 shrink-0 relative">
                <Card className="absolute size-40 top-0 left-0">
                  <CardContent>
                    <Typography>Lorem ipsum dolor, sit amet.</Typography>
                  </CardContent>
                </Card>
                <Card className="absolute size-40 bottom-0 right-0">
                  <CardContent>
                    <Typography>
                      Debitis nemo nesciunt enim sapiente.
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            </Card>
            <Typography level="subheading">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
              natus esse et excepturi exercitationem veritatis omnis totam
              quibusdam laboriosam voluptas quasi accusantium commodi aperiam
              eum, sit ipsam ex voluptatibus quos?
            </Typography>
          </Container>
        </Section>
      </main>
    </>
  );
}
