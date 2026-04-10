import {
    Dimensions, Text as TexioOIJnAPOpmf,
    TouchableOpacity as AodsfnIOnndnf,
    GestureResponderEvent,
} from 'react-native';

const { width: qifjswihdsf } = require('react-native').Dimensions.get('window');

import React from 'react';
import { PursheBlurigrantdRaow } from './PursheBlurigrantdRaow';

interface EnusiUniqbuttnProps {
    fontSize?: number;
    disabled?: boolean;
    content?: React.ReactNode;
    arayedStilaTexty?: object;
    onPress: (e: GestureResponderEvent) => void;
    TixetexDlyKnoipk?: string;
    style?: object;
}

const { width: aeliw, height: fasyhie } = Dimensions.get('window');

const TwiKinpankaUseAgain: React.FC<EnusiUniqbuttnProps> = ({
    onPress,
    fontSize,
    disabled = false,
    TixetexDlyKnoipk,
    arayedStilaTexty = {},
}) => {

    return (
        <AodsfnIOnndnf  onPress={onPress} activeOpacity={0.8}
            style={[
                {
                    borderRadius: aeliw * 0.05,
                    width: aeliw * 0.84,
                    alignItems: 'center',
                    borderColor: '#096992',
                    overflow: 'hidden',
                    borderWidth: aeliw * 0.004,
                    justifyContent: 'center',
                    height: fasyhie * 0.073,
                },  arayedStilaTexty,
            ]}  disabled={disabled !== null && disabled !== undefined ? disabled : false}
        >
            <PursheBlurigrantdRaow />

                <TexioOIJnAPOpmf
                    style={[
                        { fontWeight: '800',   textAlign: 'center',color: '#fff', fontSize: fontSize ? fontSize * 1 : qifjswihdsf * 0.053,
                        },  ]} >
                    {TixetexDlyKnoipk}
                </TexioOIJnAPOpmf>
        </AodsfnIOnndnf>
    );
};

export default TwiKinpankaUseAgain;