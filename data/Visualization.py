import altair as alt
import pandas as pd
import sys
import altair_saver
from altair_saver import save

inp = input("Genes:")
geneList = [inp]
while True:
    inp = input("Genes:")
    if inp == "":
        break
    geneList.append(inp)


print(geneList)
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


save(Chart,"data/chart.png")
