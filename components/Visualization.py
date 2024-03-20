import altair as alt
import pandas as pd
import sys
# import altair_saver
# from altair_saver import save
# import vl_convert as vlc

geneList = sys.argv[2:]


# FilterType = input("Species or Gene Filter:")
# while FilterType != "Species" and FilterType != "Gene":
#     print("Please Enter Valid Method (Species or Gene)\n")
#     FilterType = input("Species or Gene Filter:")
FilterType = "Gene"
if FilterType == "Gene":
#     inp = input("Genes:")
#     geneList = [inp]
#     while True:
#         inp = input("Genes:")
#         if inp == "":
#             break
#         geneList.append(inp)


    # print(geneList)
    speciesData = "data\\proportions\\GCF_000001405.40"
    # genomeData = "data\\proportions\\mammalia"

    speciesDF = pd.read_csv(speciesData, delimiter="\t")
    # genomeDF = pd.read_csv(genomeData, delimiter="\t")


    geneList = [gene.upper() for gene in geneList]
    filteredSpeciesDF = speciesDF[speciesDF["Gene"].isin(geneList)]

    # print(filteredSpeciesDF.head(10))
    # for x in geneList:
    #     if x not in filteredSpeciesDF["Gene"]:
    #         print(f"{x} not found")


    codons = filteredSpeciesDF.iloc[:, -64:].columns


    melted_df = pd.melt(filteredSpeciesDF, id_vars='Gene', value_vars=codons)


    custom_color_scale = alt.Scale(
        domain=[0, 0.5, 1],
        range=["#008BFF", "#E0E0E0", "#FF6347"],
        type='linear',
        zero=True
    )

    Chart = alt.Chart(melted_df).mark_rect().encode(
        x='Gene:O',
        y='variable:O',
        color=alt.Color('value:Q', scale=custom_color_scale))


else:
    inp = input("Species:")
    speciesList = [inp]
    while True:
        inp = input("Species:")
        if inp == "":
            break
        speciesList.append(inp)


    print(speciesList)
    FamilyData = "data\\proportions\\mammalia"
    # genomeData = "data\\proportions\\mammalia"

    FamilyDF = pd.read_csv(FamilyData, delimiter="\t")
    # genomeDF = pd.read_csv(genomeData, delimiter="\t")

    
    speciesList = [species.lower() for species in speciesList]
    filteredFamilyDF = FamilyDF[FamilyDF["Name"].isin(speciesList)]

    # print(filteredSpeciesDF.head(10))
    # for x in geneList:
    #     if x not in filteredSpeciesDF["Gene"]:
    #         print(f"{x} not found")


    codons = filteredFamilyDF.iloc[:, -64:].columns


    melted_df = pd.melt(filteredFamilyDF, id_vars='Name', value_vars=codons)


    custom_color_scale = alt.Scale(
        domain=[0, 0.5, 1],
        range=["#008BFF", "#E0E0E0", "#FF6347"],
        type='linear',
        zero=True
    )

    Chart = alt.Chart(melted_df).mark_rect().encode(
        x='Name:O',
        y='variable:O',
        color=alt.Color('value:Q', scale=custom_color_scale))
    

Chart.save("public/img/altair_chart.html")

# png_data = vlc.vegalite_to_png(Chart.to_json(), scale=2)
# with open("public/img/altair_chart.png", "wb") as f:
#     f.write(png_data)