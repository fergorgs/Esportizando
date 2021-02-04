import React, { useEffect, useState } from 'react';
import { 
    Image,
    View,
    Text,
    ScrollView,
    TextInput,
    Button,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { Picker } from '@react-native-community/picker';
import { Header, Icon } from 'react-native-elements';

import DateTimePicker from '@react-native-community/datetimepicker';
//import DatePicker from 'react-native-date-picker';

import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import Loading from '../../Loading';
import Event from '../../api/controllers/Event';


const mainColor = '#446a9c';
const textColor = '#ffffff';


function NewEventCard({ navigation, route }) {
    const { register, handleSubmit, setValue, getValues, errors } = useForm();

    const [ selected, setSelected ] = useState('none');

    const now = new Date();
    now.setSeconds(0);

    const [ picking, setPicking ] = useState(false);
    const [ date, setDate ] = useState(now);
    const [ time, setTime ] = useState(now);
    const [ mode, setMode ] = useState('date');

    const [ loading, setLoading ] = useState(false);
    const token = useSelector(state => state.auth.token);

    useEffect(() => {
        register('name');
        register('description');
        register('address');
        register('maxCap');
        register('price');
        register('date');
        register('time');
        register('sport');
    }, [ register ]);

    useEffect(() => {
        const fetch = () => {
            setLoading(true);
            // get data


            setTimeout(() => {
                setValue('name', 'teste apenas');
                setValue('description', 'teste');
                setValue('address', 'rua teste');
                setValue('maxCap', '10');
                setValue('price', '14');
                setValue('sport', 'futebol');
                setSelected('futebol');
                setLoading(false);
            }, 3000);
        };

        const set = () => {
            setValue('price', '0');
            setValue('maxCap', '0');
            setValue('date', date.toLocaleDateString('pt-BR'));
            setValue('time', time.toLocaleTimeString('pt-BR'));
        };

        if (route.params?.event)
            fetch();
        else 
            set();
    }, [ route.params?.event ]);

    const onSubmit = async (data) => {
        setLoading(true);
        console.log(data);
        // send data
        
        if (route.params?.id) {
            //update
        } else {
            //create
            try {
                const res = await Event.create({ event: data });
                console.log(res);

                route.params?.refresh();
                navigation.goBack();
            } catch (e) {
                console.log(e);
            }
        }

        setLoading(false);

    };
        
    const showPicker = (type) => {
        setMode(type);
        setPicking(true);
    };

    const selectDateTime = (_, selected) => {
        const curr = selected || 
            (mode === 'date' && date) || 
            (mode === 'time' && time);

        //setShow(Platform.OS === 'ios');
        setPicking(false);
        
        if (mode === 'date') {
            setValue('date', curr.toLocaleDateString('pt-BR'));
            setDate(curr);
        }
        if (mode === 'time') {
            setValue('time', curr.toLocaleTimeString('pt-BR'));
            setTime(curr);
        }
    };

    return (
        loading ?
        <Loading /> :
        <View style={{flex: 1}}>
            <Header
                statusBarProps={{
                    backgroundColor: mainColor,
                    translucent: true,
                    hidden: false
                }}
                containerStyle={{
                    borderBottomWidth: 0
                }}
                backgroundColor={ mainColor }
                leftComponent={ 
                    <Icon
                        name='chevron-left'
                        onPress={ () =>
                            navigation.goBack()
                        }
                        color='white'
                    />
                }
                centerComponent={{ 
                    text: 'Criar Novo Evento', 
                    style: { 
                        color: textColor, 
                        fontSize: 20,
                    }
                }}
                //leftContainerStyle={{margin: 5, flex: 3}}
            />
            { /*
            <Header
                backgroundColor="white"
                leftComponent={
                    <Icon
                        name='chevron-left'
                        onPress={
                            () => navigation.goBack()
                        }
                    />
                }
                centerComponent={{ 
                    text: 'Criar novo evento', 
                    style: {
                        color: '#000', 
                        fontSize: 20 
                    } 
                }}
            />
            */ }
            <ScrollView 
                contentContainerStyle={{
                    justifyContent: 'space-around'
                }}
            >
                <View style={styles.container}>
                    {/* {photo && ( */}
                    { /*<Image
                        style={{ 
                            width: 150, 
                            height: 150 
                        }}
                        source={{
                            uri: 'https://mrconfeccoes.com.br/wp-content/uploads/2018/03/default.jpg'
                        }}
                    /> */}
                    {/* )} */}
                    { /*<View style={styles.imageButton}>
                        <Button 
                            title="Escolher imagem" 
                            //onPress={this.handleChoosePhoto}  
                        />
                    </View>
                    */}
                    <TextInput
                        defaultValue={ getValues('name') }
                        placeholder="Nome do evento"
                        style={styles.singleLineInput}
                        onChangeText={ text => {
                            setValue('name', text);
                        }}
                    />
                    <TextInput
                        defaultValue={ getValues('description') }
                        placeholder="Descrição"
                        style={styles.multiLineInput}
                        multiline={true}
                        onChangeText={ text => {
                            setValue('description', text);
                        }}
                    />
                    <Text style={{
                        padding: 5,
                        textAlign: 'justify',
                        backgroundColor: '#D4DEEC',
                        borderBottomLeftRadius: 3,
                        borderBottomRightRadius: 3,
                        color: '#888'
                    }}>
                        Insira uma descrição breve, explicando o que será feito durante o evento.</Text>
                    <TextInput
                        defaultValue={ getValues('address') }
                        placeholder="Endereço"
                        style={styles.singleLineInput}
                        onChangeText={ text => {
                            setValue('address', text);
                        }}
                    />
                    <View style={{ flexDirection: 'row', height: 48, marginTop: 10}}>
                        { /*<View 
                            style={{ 
                                marginTop: 10,
                                alignItems: 'center',
                                flexDirection: 'row', 
                                width: '100%' 
                            }}
                        >*/ }
                        <TouchableOpacity
                            onPress={ () => showPicker('date') }
                            style={{
                                backgroundColor: 'white',
                                flex: 1,
                                marginRight: 10,
                                flexDirection: 'row',
                                alignItems: 'center',
                                borderRadius: 3,
                                elevation: 2,
                                overflow: 'hidden'
                            }}
                        >
                            <Text 
                                style={{ 
                                    color: '#fff',
                                    backgroundColor: '#3E618E',
                                    lineHeight: 48,
                                    paddingLeft: 10,
                                    paddingRight: 10,
                                    height: '100%',
                                    fontSize: 14
                                }}
                            > 
                                Data 
                            </Text>
                            <Text
                                style={{ 
                                    color: 'black',
                                    paddingLeft: 10,
                                    paddingRight: 10,

                                }}
                            > 
                                { date.toLocaleDateString('pt-BR') } 
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={ () => showPicker('time') }
                            style={{
                                backgroundColor: 'white',
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                borderRadius: 3,
                                elevation: 2,
                                overflow: 'hidden'
                            }}
                        >
                            <Text 
                                style={{ 
                                    color: '#fff',
                                    backgroundColor: '#3E618E',
                                    lineHeight: 48,
                                    paddingLeft: 10,
                                    paddingRight: 10,
                                    height: '100%',
                                    fontSize: 14
                                }}
                            > 
                                Hora
                            </Text>
                            <Text
                                style={{ 
                                    color: 'black',
                                    paddingLeft: 10,
                                    paddingRight: 10,

                                }}
                            > 
                                { time.toLocaleTimeString('pt-BR') } 
                            </Text>
                        </TouchableOpacity>
                        {/*</View>
                        <View 
                            style={{ 
                                marginTop: 10,
                                alignItems: 'center',
                                flexDirection: 'row', 
                                width: '100%' 
                            }}
                        >
                            <Button 
                                onPress={ () => showPicker('time') } 
                                title="Selecione Hora"
                            />
                            <Text> { time.toLocaleTimeString('pt-BR') } </Text>
                        </View> */}
                    </View>
                    { 
                        picking &&
                        <DateTimePicker
                            value={ 
                                mode === 'date' && date || 
                                mode === 'time' && time 
                            }
                            is24Hour={ true }
                            minuteInterval={ 15 } 
                            //placeholder="Data e hora"
                            //style={styles.singleLineInput}
                            mode={ mode }
                            onChange={ selectDateTime }
                        /> 
                    }
                    <View style={{flexDirection: 'row'}}>
                        <View style={{width: '50%', paddingRight: 7}}>
                            <TextInput
                                defaultValue={ getValues('maxCap') || '0' }
                                keyboardType="numeric"
                                style={styles.numberInput}
                                onChangeText={ text => {
                                    setValue('maxCap', text);
                                }}
                            />
                            <Text style={{
                                padding: 5,
                                textAlign: 'justify',
                                backgroundColor: '#D4DEEC',
                                borderBottomLeftRadius: 3,
                                borderBottomRightRadius: 3,
                                color: '#888'
                            }}>
                                Máximo de pessoas
                            </Text>
                        </View>
                        <View style={{width: '50%', paddingLeft: 7}}>
                            <TextInput
                                defaultValue={ getValues('price') || '0' }
                                keyboardType="numeric"
                                style={styles.numberInput}
                                onChangeText={ text => {
                                    setValue('price', text);
                                }}
                            />
                            <Text style={{
                                padding: 5,
                                textAlign: 'justify',
                                backgroundColor: '#D4DEEC',
                                borderBottomLeftRadius: 3,
                                borderBottomRightRadius: 3,
                                color: '#888'
                            }}>
                                Preço por pessoa
                            </Text>
                        </View>
                    </View>
                    <View 
                        style={{
                            //borderColor: "black",
                            //borderWidth: 1,
                            borderRadius: 3,
                            marginTop: 10,
                            elevation: 2,
                            overflow: 'hidden'
                        }}
                    >
                        <Picker
                            selectedValue={ selected }
                            //style={styles.picker}
                            style={{
                                padding: 5,
                                color: selected === 'none' ? '#999' : '#000',
                                backgroundColor: 'white',
                            }}
                            onValueChange={ (text, _) => {
                                setValue('sport', text);
                                setSelected(text);
                            }}
                        >
                            <Picker.Item label="Selecione um esporte" value="none"/>
                            <Picker.Item label="Futebol" value="-MSZqegztjKz5W63RPRh"/>
                            <Picker.Item label="Voleibol" value="-MSZqegztjKz5W63RPRi"/>
                            <Picker.Item label="Tênis de Mesa" value="-MSZqegztjKz5W63RPRj"/>
                            <Picker.Item label="Natação" value="-MSZqeh-7GAAHtjAf_yi"/>
                            <Picker.Item label="Futsal" value="-MSZqeh-7GAAHtjAf_yj"/>
                            <Picker.Item label="Corrida" value="-MSZqeh-7GAAHtjAf_yk"/>
                            <Picker.Item label="Skate" value="-MSZqeh-7GAAHtjAf_yl"/>
                            <Picker.Item label="Surfe" value="-MSZqeh-7GAAHtjAf_ym"/>
                            <Picker.Item label="Judô" value="-MSZqeh-7GAAHtjAf_yn"/>
                            <Picker.Item label="Musculação" value="-MSZqeh-7GAAHtjAf_yo"/>
                            <Picker.Item label="Handebol" value="-MSZqeh-7GAAHtjAf_yp"/>
                            <Picker.Item label="Tênis" value="-MSZqeh-7GAAHtjAf_yq"/>
                            <Picker.Item label="Caminhada" value="-MSZqeh-7GAAHtjAf_yr"/>
                            <Picker.Item label="Pilates" value="-MSZqeh-7GAAHtjAf_ys"/>
                            <Picker.Item label="Ciclismo" value="-MSZqeh-7GAAHtjAf_yt"/>
                        </Picker>
                    </View>
                    { /*
                    <View style={{marginTop: 15}}>
                        <Button onPress={ handleSubmit(onSubmit) } title="Criar evento"/>
                    </View>
                    */ }
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#3E618E',
                            marginTop: 10,
                            height: 48,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 3,
                            elevation: 2
                        }}
                        onPress={ handleSubmit(onSubmit) }
                    >
                        <Text
                            style={{
                                color: 'white',
                                fontSize: 16
                            }}
                        > Criar Evento </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

export default NewEventCard;


const styles = StyleSheet.create({
    container: {
        padding:25,
        flex: 1,
    },
    imageButton: {
        marginTop: 15,
        width: 150,
    },
    singleLineInput: {
        marginTop: 10,
        padding: 8,
        backgroundColor: "white",
        //borderColor: "black",
        //borderWidth: 1,
        elevation: 2,
        borderRadius: 3
    },
    multiLineInput: {
        marginTop: 10,
        padding: 8,
        backgroundColor: "white",
        //borderColor: "black",
        //borderWidth: 1,
        elevation: 2,
        borderRadius: 3,
        height: 100,
        textAlignVertical: 'top'
    },
    numberInput: {
        marginTop: 10,
        padding: 8,
        backgroundColor: "white",
        //borderColor: "black",
        //borderWidth: 1,
        elevation: 2,
        borderRadius: 3,
        // width: '45%'
    },
    picker: {
        padding: 7,
        backgroundColor: "white",
    }
})
