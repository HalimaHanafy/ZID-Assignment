import React from 'react';
import styled from '@emotion/native';
import { useTheme } from '@react-navigation/native';
import {Typography} from './typography';

const DetailsLineContainer = styled.View({
  marginVertical: 5,
  flexDirection: 'row',
});

const DetailsLineContent = styled(Typography)({
  flex: 1,
  textAlign: 'right',
});

DetailsLineContent.defaultProps = {
  fontSize: 14,
};


export const DetailsLine: React.FC<{
  label?: React.ReactNode;
  children: string;
}> = ({label, children}) => {
  const {colors}=useTheme();

  return (
    <DetailsLineContainer>
      <Typography color={colors.textGray} fontSize={14} style={{marginRight: 16}} weight="medium">
        {label}
      </Typography>

      <DetailsLineContent weight={label==='SKU'?'500':'400'} color={colors.text}>{children}</DetailsLineContent>
    </DetailsLineContainer>
  );
};
DetailsLine.defaultProps={
  label:''
};

