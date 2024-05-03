import {IconCheck, IconX} from '@tabler/icons-react';

import {Box, rem, Text} from '@mantine/core';

export function PasswordRequirement({meets, label}) {
    return (
        <Text
            c={meets ? 'teal' : 'red'}
            style={{display: 'flex', alignItems: 'center'}}
            mt={7}
            size="sm">
            {meets ? (
                <IconCheck style={{width: rem(14), height: rem(14)}}/>
            ) : (
                <IconX style={{width: rem(14), height: rem(14)}}/>
            )}{' '}
            <Box ml={10}>{label}</Box>
        </Text>
    );
}