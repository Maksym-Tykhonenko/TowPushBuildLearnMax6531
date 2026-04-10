import React, { useRef as Plmoknijb, useState as Qwexrtyu, useEffect as Zmxncbvl } from 'react';
import acafsbikartgry from '../AreshuWilnarAsetyLibrow/acafsbikartgry';
import { PursheBlurigrantdRaow } from '../LuiwoBilurCimpensRelna/PursheBlurigrantdRaow';
import { tushperlanFinlsRidl } from '../tushperlanFinlsRidl';
import {
    ScrollView as Xswedcvfr,
    View as Lkjhgfdsa,Dimensions as Vfrtgbnhy,  Text as Poiuytrewq,
    TouchableOpacity as Mnbvcxzlk,
    Animated as Fghjklmnb,
    Share as RtyuioPlo,
    Image as Qazwsxedc,
    Easing as Ujmnhbgvf,
} from 'react-native';


const { width: Qazplmokn, height: Wsxedcrfv } = Vfrtgbnhy.get('window');

export default function Bnhytgvrfc() {
    const [Juhbgvfcdx, SetJuhbgvfcdx] = Qwexrtyu<any>(null);
    const [Mikloplkmn, SetMikloplkmn] = Qwexrtyu<string | null>(null);
    const [Zaqxswedcv, SetZaqxswedcv] = Qwexrtyu<number>(0);

    // --- animation values ---
    const Qwazxswedc = Plmoknijb(new Fghjklmnb.Value(0)).current;

    // --- animate in when fact screen appears ---
    Zmxncbvl(() => {
        if (Juhbgvfcdx && Mikloplkmn) {
            Qwazxswedc.setValue(0);
            Fghjklmnb.timing(Qwazxswedc, {
                toValue: 1,
                duration: 420,
                useNativeDriver: true,
                easing: Ujmnhbgvf.out(Ujmnhbgvf.exp),
            }).start();
        }
    }, [Juhbgvfcdx, Mikloplkmn]);

    // --- handle open fact ---
    const Qazwsxedcr = (cat: any) => {
        const facts = cat.facts;
        const randomIndex = Math.floor(Math.random() * facts.length);
        SetJuhbgvfcdx(cat);
        SetMikloplkmn(facts[randomIndex]);
        SetZaqxswedcv(prev => prev + 1);
    };

    // --- handle close fact with animation ---
    const Xswedcvfrt = () => {
        Fghjklmnb.timing(Qwazxswedc, {
            toValue: 0,
            duration: 320,
            useNativeDriver: true,
            easing: Ujmnhbgvf.in(Ujmnhbgvf.exp),
        }).start(() => {
            SetJuhbgvfcdx(null);
            SetMikloplkmn(null);
        });
    };

    // --- handle regenerate fact with bounce animation ---
    const Poiuytrewql = () => {
        Fghjklmnb.sequence([
            Fghjklmnb.timing(Qwazxswedc, {
                toValue: 0,
                duration: 180,
                useNativeDriver: true,
                easing: Ujmnhbgvf.in(Ujmnhbgvf.linear),
            }),
            Fghjklmnb.spring(Qwazxswedc, {
                toValue: 1,
                useNativeDriver: true,
                friction: 6,
                tension: 120,
            }),
        ]).start();
        setTimeout(() => {
            if (Juhbgvfcdx) {
                const facts = Juhbgvfcdx.facts;
                let newFact = Mikloplkmn;
                while (facts.length > 1 && newFact === Mikloplkmn) {
                    newFact = facts[Math.floor(Math.random() * facts.length)];
                }
                SetMikloplkmn(newFact);
                SetZaqxswedcv(prev => prev + 1);
            }
        }, 180);
    };

    // ...розміри...
    const cardW = Qazplmokn * 0.28;
    const cardH = cardW;
    const cardR = Qazplmokn * 0.06;
    const cardImgR = Qazplmokn * 0.045;
    const btnH = Wsxedcrfv * 0.065;
    const btnR = Qazplmokn * 0.04;
    const btnFont = Qazplmokn * 0.045;
    const factBoxW = Qazplmokn * 0.88;
    const factBoxR = Qazplmokn * 0.06;
    const factFont = Qazplmokn * 0.048;
    const titleFont = Qazplmokn * 0.06;
    const descFont = Qazplmokn * 0.038;

    // --- animated styles ---
    const factCardStyle = {
        opacity: Qwazxswedc,
        transform: [
            {
                scale: Qwazxswedc.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.95, 1],
                }),
            },
            {
                translateY: Qwazxswedc.interpolate({
                    inputRange: [0, 1],
                    outputRange: [40, 0],
                }),
            },
        ],
    };

    if (Juhbgvfcdx && Mikloplkmn) {
        // --- Екран факту з анімацією ---
        return (
            <Lkjhgfdsa style={{
                flex: 1, alignItems: 'center',backgroundColor: 'transparent',
            }}>
                <Fghjklmnb.View
                    key={Zaqxswedcv}
                    style={[
                        {
                            borderRadius: factBoxR,
                            padding: Qazplmokn * 0.04,
                            overflow: 'hidden',
                            alignItems: 'center',       justifyContent: 'flex-start',     alignSelf: 'center',   width: factBoxW,
                            backgroundColor: 'transparent',
                        },  factCardStyle,
                    ]}
                >
                    <PursheBlurigrantdRaow style={{
                    }} />
                    <Qazwsxedc
                        source={Juhbgvfcdx.image}
                        style={{  width: Qazplmokn * 0.64, height: Qazplmokn * 0.64, borderRadius: cardImgR, marginBottom: Wsxedcrfv * 0.018,
                        }} resizeMode="cover"
                    />
                    <Poiuytrewq style={{
                        marginBottom: Wsxedcrfv * 0.008, color: '#FEB70A', fontFamily: tushperlanFinlsRidl.unuB,
                        textShadowRadius: 2,
                        textAlign: 'center',textShadowColor: '#A27508', textShadowOffset: { width: 1, height: 1 },
                        fontSize: titleFont,
                    }}>
                        {Juhbgvfcdx.title}
                    </Poiuytrewq>
                    <Poiuytrewq style={{
                        marginTop: Wsxedcrfv * 0.01,
                        color: '#fff',
                        fontSize: factFont,
                        fontFamily: tushperlanFinlsRidl.unuMei,
                        textAlign: 'center',
                    }}>
                        {Mikloplkmn}
                    </Poiuytrewq>
                    <Lkjhgfdsa style={{
                        justifyContent: 'space-between',
                        alignSelf: 'center',
                        marginTop: Wsxedcrfv * 0.03,
                        flexDirection: 'row',
                        width: '100%',
                    }}>
                        <Mnbvcxzlk  onPress={Xswedcvfrt}
                            style={{
                                justifyContent: 'center',
                                borderRadius: Qazplmokn * 0.1,
                                backgroundColor: '#FEB70A',
                                width: Wsxedcrfv * 0.05,
                                marginRight: Qazplmokn * 0.03,
                                alignItems: 'center',
                                height: Wsxedcrfv * 0.05,
                            }}>
                            <Qazwsxedc source={require('../AreshuWilnarAsetyLibrow/TulsherWiulaLarenInamgesWopei/lenazfat.png')} style={{    resizeMode: 'contain',   width: '60%',
                                    height: '60%',
                                }}
                            />
                        </Mnbvcxzlk>
                        <Mnbvcxzlk
                            style={{
                                flex: 3,
                                justifyContent: 'center',
                                backgroundColor: '#FEB70A',
                                height: Wsxedcrfv * 0.05,
                                alignItems: 'center',
                                borderRadius: Qazplmokn * 0.1,
                            }} onPress={() => {
                                RtyuioPlo.share({ message: `One fact of ${Juhbgvfcdx.title}:\n${Mikloplkmn}` })
                            }}>
                            <Poiuytrewq style={{
                                color: '#513B05',
                                fontFamily: tushperlanFinlsRidl.unuMei,
                                fontSize: btnFont,
                            }}>Share</Poiuytrewq>
                        </Mnbvcxzlk>
                        <Mnbvcxzlk
                            onPress={Poiuytrewql}
                            style={{
                                justifyContent: 'center',
                                marginLeft: Qazplmokn * 0.03,
                                borderRadius: Qazplmokn * 0.1,
                                backgroundColor: '#FEB70A',
                                height: Wsxedcrfv * 0.05,
                                alignItems: 'center',
                                width: Wsxedcrfv * 0.05,
                            }}>
                            <Qazwsxedc
                                source={require('../AreshuWilnarAsetyLibrow/TulsherWiulaLarenInamgesWopei/regenerta.png')}style={{ resizeMode: 'contain', width: '60%', height: '60%',
                                }}
                            />
                        </Mnbvcxzlk>
                    </Lkjhgfdsa>
                </Fghjklmnb.View>
            </Lkjhgfdsa>
        );
    }

    // Екран категорій
    return (
        <Lkjhgfdsa style={{
            alignItems: 'center',
            flex: 1,
            backgroundColor: 'transparent',
        }}>
            <Xswedcvfr  contentContainerStyle={{
                    alignItems: 'center', justifyContent: 'center',
                    paddingBottom: Wsxedcrfv * 0.19,
                }}
                showsVerticalScrollIndicator={false}
            >
                {acafsbikartgry.map((cat, idx) => (
                    <Lkjhgfdsa style={{
                        width: Qazplmokn * 0.91,
                        alignSelf: 'center',
                        marginBottom: Wsxedcrfv * 0.01,
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexDirection: 'row',
                    }} key={idx}>
                        <Qazwsxedc
                            source={cat.image}
                            style={{
                                borderRadius: cardImgR,
                                height: cardH,
                                marginRight: Qazplmokn * 0.04,
                                width: cardW,
                            }}
                            resizeMode="cover"
                        />
                        <Lkjhgfdsa style={{
                            borderWidth: Qazplmokn * 0.003,
                            justifyContent: 'center',
                            flex: 1,
                            paddingVertical: Wsxedcrfv * 0.01,
                            paddingHorizontal: Qazplmokn * 0.019,
                            borderRadius: cardR,
                            borderColor: '#096992',
                            overflow: 'hidden',
                        }}>
                            <PursheBlurigrantdRaow style={{
                            }} />
                            <Lkjhgfdsa style={{  alignItems: 'flex-start', width: '100%',}}>
                                <Lkjhgfdsa style={{ flex: 1, justifyContent: 'center' }}>
                                    <Poiuytrewq style={{
                                        textShadowRadius: 2,
                                        color: '#FEB70A',
                                        fontSize: titleFont,
                                        marginBottom: Wsxedcrfv * 0.008,
                                        textShadowColor: '#A27508',
                                        textShadowOffset: { width: 1, height: 1 },
                                        fontFamily: tushperlanFinlsRidl.unuB,
                                    }}>
                                        {cat.title}
                                    </Poiuytrewq>
                                    <Poiuytrewq style={{
                                        marginBottom: Wsxedcrfv * 0.012,
                                        color: '#fff',
                                        fontSize: descFont,
                                        fontFamily: tushperlanFinlsRidl.unuRel,
                                    }}>
                                        {cat.description}
                                    </Poiuytrewq>
                                    <Mnbvcxzlk
                                        onPress={() => Qazwsxedcr(cat)}
                                        style={{
                                            alignSelf: 'flex-end',
                                            borderRadius: btnR,
                                            justifyContent: 'center',
                                            height: btnH * 0.61,
                                            alignItems: 'center',
                                            backgroundColor: '#FEB70A',
                                            paddingHorizontal: Qazplmokn * 0.06,
                                        }}>
                                        <Poiuytrewq style={{
                                            color: '#000000',
                                            fontFamily: tushperlanFinlsRidl.unuMei,
                                            fontSize: btnFont * 0.9,
                                        }}>Choose</Poiuytrewq>
                                    </Mnbvcxzlk>
                                </Lkjhgfdsa>
                            </Lkjhgfdsa>
                        </Lkjhgfdsa>
                    </Lkjhgfdsa>
                ))}
                <Mnbvcxzlk style={{
                        marginBottom: Wsxedcrfv * 0.01,
                        backgroundColor: '#FEB70A',
                        width: Qazplmokn * 0.92,borderRadius: Qazplmokn * 0.1,  alignItems: 'center',  justifyContent: 'center',
                        height: btnH,           borderColor: '#A27508',           borderWidth: Qazplmokn * 0.003,
                        gap: Qazplmokn * 0.03,    flexDirection: 'row',
                        marginTop: Wsxedcrfv * 0.01,
                    }}
                    onPress={() => {
                        const idx = Math.floor(Math.random() * acafsbikartgry.length);
                        Qazwsxedcr(acafsbikartgry[idx]);
                    }}
                >
                    <Qazwsxedc
                        source={require('../AreshuWilnarAsetyLibrow/TulsherWiulaLarenInamgesWopei/genrranfadt.png')}
                        style={{
                            width: btnH * 0.7,
                            height: btnH * 0.7,
                        }}
                    />
                    <Poiuytrewq style={{
                        color: '#0B84C9',
                        fontFamily: tushperlanFinlsRidl.unuB,
                        fontSize: btnFont,
                    }}>Generate a random fact</Poiuytrewq>
                </Mnbvcxzlk>
            </Xswedcvfr>
        </Lkjhgfdsa>
    );
}
