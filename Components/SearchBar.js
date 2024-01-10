const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    // Call the onSearch callback with the entered text
    onSearch(searchText);
  };

  return (
    <View style={styles.searchBarContainer}>
      <Feather name="search" size={24} color="black" />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        style={styles.searchBar}
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
        onSubmitEditing={handleSearch}
        onEndEditing={() => console.log()}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%", // Adjust width as needed
    backgroundColor: "lightgray",
    padding: 10,
    borderRadius: 20,
    marginTop: 30,
    alignSelf: "center",
  },
  searchBar: {
    width: "85%", // Adjust width as needed
    color: "black",
    fontWeight: "400",
    fontSize: 14,
  },
});
