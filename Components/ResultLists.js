import {StylesSheet, Text ,View, FlatList} from "react-native";

const ResultLists= ({title,results}) => {
    return (
        <View>
            <Text>{title}</Text>
            <Text>Results: {results.length}</Text>
            <FlatList
            horizontal
            data={results}
            keyExtractor={(result)=>result.id}
            renderItem={({item})=> {
                return <Text>{item.name}</Text>;
            }}
            />
        </View>
    );
};

export default ResultLists;

const styles= StyleSheet({
    titleStyle: {
        fontSize:18,
        fontWeight: "bold",
    },
});