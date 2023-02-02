import { Input, Label, Paragraph, YStack } from '@my/ui'
import React from 'react'

export const CreatePoll = (props: {}) => {
  return (
    <YStack
      miw={400}
      maw={800}
      jc="center"
      ac="center"
      mih={250}
      overflow="hidden"
      space="$2"
      m="$3"
      p="$2"
    >
      <Label htmlFor="name">Name</Label>
      <Input id="name" f={1} size="$5" />
      <InputWithLabel id="desc" label="Description" />
    </YStack>
  )
}

const InputWithLabel = ({ id, label }: { id: string; label: string }) => {
  return (
    <>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} f={1} size="$2" />
    </>
  )
}
