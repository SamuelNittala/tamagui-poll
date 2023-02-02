import { Anchor, Aside, Button, H1, H2, Input, Paragraph, Separator, Sheet, XStack, YStack } from '@my/ui'
import React, { useState } from 'react'
import { useLink } from 'solito/link'

export function HomeScreen() {
  const linkProps = useLink({
    href: '/create-poll',
  })
  return (
    <YStack f={1} jc="center" ai="center" p="$4" space>
      <YStack space="$5" maw={600}>
        <H1 ta="center">Welcome to pollit!</H1>
        <Separator />
        <Paragraph ta="center">
          Create polls with ease!
        </Paragraph>
      </YStack>

      <XStack>
        <Button {...linkProps}>Create Poll</Button>
      </XStack>

    </YStack>
  )
}

