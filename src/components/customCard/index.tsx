/* eslint-disable react-native/no-inline-styles */

import {Button, Card} from 'react-native-paper';
import {
  CustomCardActions,
  CustomCardContainer,
  CustomCardTitle,
  CustomCardTitleAction,
  CustomCardTitleContainer,
} from './styles';

import {FlatList} from 'react-native';
import {IconSource} from 'react-native-paper/lib/typescript/components/Icon';
import React from 'react';
import {useTheme} from 'styled-components';

interface CustomcardProps {
  title: string;
  titleColor?: 'primary' | 'error' | 'accent';
  content?: React.ReactElement;
  titleAction?: {
    onPress: () => void;
    mode?: 'contained' | 'outlined' | 'text';
    icon: IconSource;
  };
  actions?: Array<{
    text?: string;
    color?: 'primary' | 'error' | 'accent';
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
  titleAction,
}) => {
  const theme = useTheme();
  return (
    <CustomCardContainer>
      <CustomCardTitleContainer>
        <CustomCardTitle titleColor={titleColor} title={title} />
        {titleAction && (
          <CustomCardTitleAction
            color={titleColor && theme.colors[titleColor]}
            icon={titleAction?.icon}
            onPress={() => titleAction.onPress()}
          />
        )}
      </CustomCardTitleContainer>
      {content && <Card.Content>{content}</Card.Content>}
      {actions && (
        <CustomCardActions>
          <FlatList
            data={actions}
            keyExtractor={(action, index) => index.toString()}
            style={{flexDirection: 'row', flex: 1}}
            contentContainerStyle={{flexDirection: 'row', flex: 1}}
            renderItem={({item: {text, color, onPress, mode, icon}}) => (
              <Button
                mode={mode || 'text'}
                color={(color && theme.colors[color]) || theme.colors.text}
                onPress={onPress}
                icon={icon}>
                {text}
              </Button>
            )}
          />
        </CustomCardActions>
      )}
    </CustomCardContainer>
  );
};

export default CustomCard;
