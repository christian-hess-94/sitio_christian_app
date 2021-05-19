import {Button, Card} from 'react-native-paper';

import {FlatList} from 'react-native';
import React from 'react';
import {useTheme} from 'styled-components';

interface CustomcardProps {
  title: string;
  content: React.ReactElement;
  actions?: Array<{
    text: string;
    color?: any;
    onPress?: () => void;
    mode?: 'contained' | 'outlined' | 'text';
  }>;
}

const Customcard: React.FC<CustomcardProps> = ({title, content, actions}) => {
  const theme = useTheme();
  return (
    <Card>
      <Card.Title title={title} />
      <Card.Content>{content}</Card.Content>
      <Card.Actions>
        <FlatList
          data={actions}
          keyExtractor={action => action.text}
          renderItem={({item: {text, color, onPress, mode}}) => (
            <Button
              mode={mode || 'text'}
              color={color || theme.colors.text}
              onPress={onPress}>
              {text}
            </Button>
          )}
        />
      </Card.Actions>
    </Card>
  );
};

export default Customcard;
