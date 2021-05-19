import {Button, Card} from 'react-native-paper';
import {
  CustomCardActions,
  CustomCardContainer,
  CustomCardTitle,
} from './styles';

import {FlatList} from 'react-native';
import {IconSource} from 'react-native-paper/lib/typescript/components/Icon';
import React from 'react';
import {useTheme} from 'styled-components';

interface CustomcardProps {
  title: string;
  titleColor?: 'primary' | 'error' | 'accent';
  content: React.ReactElement;
  actions?: Array<{
    text?: string;
    color?: any;
    onPress?: () => void;
    mode?: 'contained' | 'outlined' | 'text';
    icon?: IconSource;
  }>;
}

const CustomCard: React.FC<CustomcardProps> = ({
  title,
  content,
  actions,
  titleColor,
}) => {
  const theme = useTheme();
  return (
    <CustomCardContainer>
      <CustomCardTitle titleColor={titleColor} title={title} />
      <Card.Content>{content}</Card.Content>
      <CustomCardActions>
        <FlatList
          data={actions}
          keyExtractor={(action, index) => index.toString()}
          style={{flexDirection: 'row', flex: 1}}
          renderItem={({item: {text, color, onPress, mode, icon}}) => (
            <Button
              mode={mode || 'text'}
              color={color || theme.colors.text}
              onPress={onPress}
              icon={icon}>
              {text}
            </Button>
          )}
        />
      </CustomCardActions>
    </CustomCardContainer>
  );
};

export default CustomCard;
