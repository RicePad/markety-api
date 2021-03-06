from django.utils import timezone
from haystack import indexes
from .models import Item

class ItemIndex(indexes.SearchIndex, indexes.Indexable):
    text = indexes.CharField(document=True, use_template=True)
    title = indexes.CharField()
    price = indexes.FloatField()
    
    # We add this for autocomplete.
    text_auto = indexes.EdgeNgramField(model_attr='title')

    
    def get_model(self):
        return Item
    
    def index_queryset(self, using=None):
        """Used when the entire index for model is updated."""
        return self.get_model().objects.all()
