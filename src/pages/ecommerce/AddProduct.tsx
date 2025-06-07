import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft,
  Upload,
  X,
  Plus,
  Save,
  Eye,
  Package,
  DollarSign,
  Image as ImageIcon,
  Tag,
  Globe,
  Truck,
  Shield,
  AlertTriangle,
  Info,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ProductForm {
  name: string;
  description: string;
  shortDescription: string;
  price: number;
  comparePrice: number;
  cost: number;
  sku: string;
  barcode: string;
  category: string;
  brand: string;
  vendor: string;
  type: string;
  tags: string[];
  weight: number;
  dimensions: {
    length: number;
    width: number;
    height: number;
  };
  status: "draft" | "active" | "archived";
  visibility: "public" | "private" | "hidden";
  trackQuantity: boolean;
  continueSellingOutOfStock: boolean;
  requiresShipping: boolean;
  taxable: boolean;
  inventory: {
    quantity: number;
    lowStockThreshold: number;
    location: string;
  };
  seo: {
    title: string;
    description: string;
    url: string;
  };
  variants: {
    colors: { name: string; value: string }[];
    sizes: { name: string; price: number; stock: number }[];
  };
  images: { url: string; alt: string; primary: boolean }[];
}

const AddProduct = () => {
  const navigate = useNavigate();
  const [loading, setSaving] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const [form, setForm] = useState<ProductForm>({
    name: "",
    description: "",
    shortDescription: "",
    price: 0,
    comparePrice: 0,
    cost: 0,
    sku: "",
    barcode: "",
    category: "",
    brand: "",
    vendor: "",
    type: "",
    tags: [],
    weight: 0,
    dimensions: { length: 0, width: 0, height: 0 },
    status: "draft",
    visibility: "public",
    trackQuantity: true,
    continueSellingOutOfStock: false,
    requiresShipping: true,
    taxable: true,
    inventory: {
      quantity: 0,
      lowStockThreshold: 10,
      location: "Main Warehouse",
    },
    seo: {
      title: "",
      description: "",
      url: "",
    },
    variants: {
      colors: [],
      sizes: [],
    },
    images: [],
  });

  const [newTag, setNewTag] = useState("");
  const [uploadingImages, setUploadingImages] = useState(false);

  const categories = [
    "Electronics",
    "Clothing",
    "Home & Garden",
    "Sports & Outdoors",
    "Books",
    "Health & Beauty",
    "Toys & Games",
    "Automotive",
    "Office Supplies",
  ];

  const brands = [
    "Apple",
    "Samsung",
    "Nike",
    "Adidas",
    "Sony",
    "Microsoft",
    "Google",
    "Amazon",
    "Private Label",
  ];

  const handleInputChange = (field: string, value: any) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNestedInputChange = (
    parent: string,
    field: string,
    value: any,
  ) => {
    setForm((prev) => ({
      ...prev,
      [parent]: {
        ...prev[parent as keyof ProductForm],
        [field]: value,
      },
    }));
  };

  const addTag = () => {
    if (newTag.trim() && !form.tags.includes(newTag.trim().toLowerCase())) {
      setForm((prev) => ({
        ...prev,
        tags: [...prev.tags, newTag.trim().toLowerCase()],
      }));
      setNewTag("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setForm((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  const addColor = () => {
    setForm((prev) => ({
      ...prev,
      variants: {
        ...prev.variants,
        colors: [...prev.variants.colors, { name: "", value: "#000000" }],
      },
    }));
  };

  const removeColor = (index: number) => {
    setForm((prev) => ({
      ...prev,
      variants: {
        ...prev.variants,
        colors: prev.variants.colors.filter((_, i) => i !== index),
      },
    }));
  };

  const addSize = () => {
    setForm((prev) => ({
      ...prev,
      variants: {
        ...prev.variants,
        sizes: [...prev.variants.sizes, { name: "", price: 0, stock: 0 }],
      },
    }));
  };

  const removeSize = (index: number) => {
    setForm((prev) => ({
      ...prev,
      variants: {
        ...prev.variants,
        sizes: prev.variants.sizes.filter((_, i) => i !== index),
      },
    }));
  };

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const files = event.target.files;
    if (!files) return;

    setUploadingImages(true);

    // Simulate image upload
    setTimeout(() => {
      const newImages = Array.from(files).map((file, index) => ({
        url: URL.createObjectURL(file),
        alt: form.name || `Product image ${form.images.length + index + 1}`,
        primary: form.images.length === 0 && index === 0,
      }));

      setForm((prev) => ({
        ...prev,
        images: [...prev.images, ...newImages],
      }));
      setUploadingImages(false);
    }, 1000);
  };

  const removeImage = (index: number) => {
    setForm((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  const setPrimaryImage = (index: number) => {
    setForm((prev) => ({
      ...prev,
      images: prev.images.map((img, i) => ({
        ...img,
        primary: i === index,
      })),
    }));
  };

  const handleSave = async (status: "draft" | "active") => {
    setSaving(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Saving product:", { ...form, status });
      setSaving(false);
      navigate("/ecommerce/products");
    }, 1500);
  };

  const generateSKU = () => {
    const prefix = form.category.substring(0, 3).toUpperCase();
    const random = Math.floor(Math.random() * 10000)
      .toString()
      .padStart(4, "0");
    setForm((prev) => ({ ...prev, sku: `${prefix}-${random}` }));
  };

  const generateSEOFromTitle = () => {
    const slug = form.name
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "-")
      .replace(/-+/g, "-")
      .trim("-");
    setForm((prev) => ({
      ...prev,
      seo: {
        ...prev.seo,
        title: form.name,
        description:
          form.shortDescription || form.description.substring(0, 160),
        url: slug,
      },
    }));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/ecommerce/products")}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-falcon-text-dark">
              Add New Product
            </h1>
            <p className="text-falcon-text-light">
              Create a new product for your store
            </p>
          </div>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" onClick={() => handleSave("draft")}>
            <Save className="h-4 w-4 mr-2" />
            Save Draft
          </Button>
          <Button onClick={() => handleSave("active")} disabled={loading}>
            {loading ? "Publishing..." : "Publish Product"}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <Tabs defaultValue="general" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="media">Media</TabsTrigger>
              <TabsTrigger value="pricing">Pricing</TabsTrigger>
              <TabsTrigger value="inventory">Inventory</TabsTrigger>
              <TabsTrigger value="seo">SEO</TabsTrigger>
            </TabsList>

            <TabsContent value="general" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Product Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="name">Product Name *</Label>
                    <Input
                      id="name"
                      value={form.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      placeholder="Enter product name"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="shortDescription">Short Description</Label>
                    <Textarea
                      id="shortDescription"
                      value={form.shortDescription}
                      onChange={(e) =>
                        handleInputChange("shortDescription", e.target.value)
                      }
                      placeholder="Brief product description (max 160 characters)"
                      maxLength={160}
                      className="mt-1"
                      rows={2}
                    />
                    <p className="text-xs text-falcon-text-light mt-1">
                      {form.shortDescription.length}/160 characters
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="description">Full Description</Label>
                    <Textarea
                      id="description"
                      value={form.description}
                      onChange={(e) =>
                        handleInputChange("description", e.target.value)
                      }
                      placeholder="Detailed product description"
                      className="mt-1"
                      rows={6}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Organization</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="category">Category *</Label>
                      <Select
                        value={form.category}
                        onValueChange={(value) =>
                          handleInputChange("category", value)
                        }
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="brand">Brand</Label>
                      <Select
                        value={form.brand}
                        onValueChange={(value) =>
                          handleInputChange("brand", value)
                        }
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select brand" />
                        </SelectTrigger>
                        <SelectContent>
                          {brands.map((brand) => (
                            <SelectItem key={brand} value={brand}>
                              {brand}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="vendor">Vendor</Label>
                      <Input
                        id="vendor"
                        value={form.vendor}
                        onChange={(e) =>
                          handleInputChange("vendor", e.target.value)
                        }
                        placeholder="Vendor/Supplier name"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="type">Product Type</Label>
                      <Input
                        id="type"
                        value={form.type}
                        onChange={(e) =>
                          handleInputChange("type", e.target.value)
                        }
                        placeholder="e.g., Physical, Digital"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label>Tags</Label>
                    <div className="flex flex-wrap gap-2 mt-2 mb-2">
                      {form.tags.map((tag, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="flex items-center gap-1"
                        >
                          {tag}
                          <X
                            className="h-3 w-3 cursor-pointer"
                            onClick={() => removeTag(tag)}
                          />
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Input
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)}
                        placeholder="Add tag"
                        onKeyPress={(e) => e.key === "Enter" && addTag()}
                      />
                      <Button type="button" variant="outline" onClick={addTag}>
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="media" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Product Images</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-2 border-dashed border-falcon-border-light rounded-lg p-6 text-center">
                      <ImageIcon className="h-12 w-12 mx-auto text-falcon-text-light mb-4" />
                      <div className="space-y-2">
                        <p className="text-falcon-text-dark">
                          Upload product images
                        </p>
                        <p className="text-sm text-falcon-text-light">
                          Drag and drop files here or click to browse
                        </p>
                      </div>
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        id="image-upload"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        className="mt-4"
                        onClick={() =>
                          document.getElementById("image-upload")?.click()
                        }
                        disabled={uploadingImages}
                      >
                        <Upload className="h-4 w-4 mr-2" />
                        {uploadingImages ? "Uploading..." : "Choose Files"}
                      </Button>
                    </div>

                    {form.images.length > 0 && (
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {form.images.map((image, index) => (
                          <div key={index} className="relative group">
                            <div className="aspect-square rounded-lg overflow-hidden border border-falcon-border-light">
                              <img
                                src={image.url}
                                alt={image.alt}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                              <Button
                                type="button"
                                variant="destructive"
                                size="sm"
                                className="h-6 w-6 p-0"
                                onClick={() => removeImage(index)}
                              >
                                <X className="h-3 w-3" />
                              </Button>
                            </div>
                            <div className="absolute bottom-2 left-2 right-2">
                              <Button
                                type="button"
                                variant={image.primary ? "default" : "outline"}
                                size="sm"
                                className="w-full text-xs"
                                onClick={() => setPrimaryImage(index)}
                              >
                                {image.primary ? "Primary" : "Set Primary"}
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="pricing" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Pricing</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="price">Price *</Label>
                      <div className="relative mt-1">
                        <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-falcon-text-light" />
                        <Input
                          id="price"
                          type="number"
                          value={form.price}
                          onChange={(e) =>
                            handleInputChange(
                              "price",
                              parseFloat(e.target.value) || 0,
                            )
                          }
                          placeholder="0.00"
                          className="pl-10"
                          step="0.01"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="comparePrice">Compare at Price</Label>
                      <div className="relative mt-1">
                        <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-falcon-text-light" />
                        <Input
                          id="comparePrice"
                          type="number"
                          value={form.comparePrice}
                          onChange={(e) =>
                            handleInputChange(
                              "comparePrice",
                              parseFloat(e.target.value) || 0,
                            )
                          }
                          placeholder="0.00"
                          className="pl-10"
                          step="0.01"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="cost">Cost per Item</Label>
                      <div className="relative mt-1">
                        <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-falcon-text-light" />
                        <Input
                          id="cost"
                          type="number"
                          value={form.cost}
                          onChange={(e) =>
                            handleInputChange(
                              "cost",
                              parseFloat(e.target.value) || 0,
                            )
                          }
                          placeholder="0.00"
                          className="pl-10"
                          step="0.01"
                        />
                      </div>
                    </div>
                  </div>

                  {form.comparePrice > 0 && form.price > 0 && (
                    <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-sm text-green-800">
                        Customers save $
                        {(form.comparePrice - form.price).toFixed(2)} (
                        {(
                          ((form.comparePrice - form.price) /
                            form.comparePrice) *
                          100
                        ).toFixed(1)}
                        % off)
                      </p>
                    </div>
                  )}

                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="taxable"
                        checked={form.taxable}
                        onCheckedChange={(checked) =>
                          handleInputChange("taxable", checked)
                        }
                      />
                      <Label htmlFor="taxable">
                        Charge tax on this product
                      </Label>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Product Variants</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <Label>Colors</Label>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={addColor}
                      >
                        <Plus className="h-4 w-4 mr-1" />
                        Add Color
                      </Button>
                    </div>
                    <div className="space-y-2">
                      {form.variants.colors.map((color, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Input
                            value={color.name}
                            onChange={(e) => {
                              const newColors = [...form.variants.colors];
                              newColors[index].name = e.target.value;
                              handleInputChange("variants", {
                                ...form.variants,
                                colors: newColors,
                              });
                            }}
                            placeholder="Color name"
                            className="flex-1"
                          />
                          <input
                            type="color"
                            value={color.value}
                            onChange={(e) => {
                              const newColors = [...form.variants.colors];
                              newColors[index].value = e.target.value;
                              handleInputChange("variants", {
                                ...form.variants,
                                colors: newColors,
                              });
                            }}
                            className="w-12 h-10 border border-falcon-border-light rounded"
                          />
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => removeColor(index)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <Label>Sizes</Label>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={addSize}
                      >
                        <Plus className="h-4 w-4 mr-1" />
                        Add Size
                      </Button>
                    </div>
                    <div className="space-y-2">
                      {form.variants.sizes.map((size, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Input
                            value={size.name}
                            onChange={(e) => {
                              const newSizes = [...form.variants.sizes];
                              newSizes[index].name = e.target.value;
                              handleInputChange("variants", {
                                ...form.variants,
                                sizes: newSizes,
                              });
                            }}
                            placeholder="Size name"
                            className="flex-1"
                          />
                          <Input
                            type="number"
                            value={size.price}
                            onChange={(e) => {
                              const newSizes = [...form.variants.sizes];
                              newSizes[index].price =
                                parseFloat(e.target.value) || 0;
                              handleInputChange("variants", {
                                ...form.variants,
                                sizes: newSizes,
                              });
                            }}
                            placeholder="Price"
                            className="w-24"
                            step="0.01"
                          />
                          <Input
                            type="number"
                            value={size.stock}
                            onChange={(e) => {
                              const newSizes = [...form.variants.sizes];
                              newSizes[index].stock =
                                parseInt(e.target.value) || 0;
                              handleInputChange("variants", {
                                ...form.variants,
                                sizes: newSizes,
                              });
                            }}
                            placeholder="Stock"
                            className="w-20"
                          />
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => removeSize(index)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="inventory" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Inventory</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <Label htmlFor="sku">SKU</Label>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={generateSKU}
                          className="text-xs h-6"
                        >
                          Generate
                        </Button>
                      </div>
                      <Input
                        id="sku"
                        value={form.sku}
                        onChange={(e) =>
                          handleInputChange("sku", e.target.value)
                        }
                        placeholder="Product SKU"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="barcode">Barcode</Label>
                      <Input
                        id="barcode"
                        value={form.barcode}
                        onChange={(e) =>
                          handleInputChange("barcode", e.target.value)
                        }
                        placeholder="Product barcode"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Switch
                        id="trackQuantity"
                        checked={form.trackQuantity}
                        onCheckedChange={(checked) =>
                          handleInputChange("trackQuantity", checked)
                        }
                      />
                      <Label htmlFor="trackQuantity">Track quantity</Label>
                    </div>

                    {form.trackQuantity && (
                      <div className="grid grid-cols-3 gap-4 ml-6">
                        <div>
                          <Label htmlFor="quantity">Quantity</Label>
                          <Input
                            id="quantity"
                            type="number"
                            value={form.inventory.quantity}
                            onChange={(e) =>
                              handleNestedInputChange(
                                "inventory",
                                "quantity",
                                parseInt(e.target.value) || 0,
                              )
                            }
                            placeholder="0"
                            className="mt-1"
                          />
                        </div>

                        <div>
                          <Label htmlFor="lowStock">Low Stock Alert</Label>
                          <Input
                            id="lowStock"
                            type="number"
                            value={form.inventory.lowStockThreshold}
                            onChange={(e) =>
                              handleNestedInputChange(
                                "inventory",
                                "lowStockThreshold",
                                parseInt(e.target.value) || 0,
                              )
                            }
                            placeholder="10"
                            className="mt-1"
                          />
                        </div>

                        <div>
                          <Label htmlFor="location">Location</Label>
                          <Input
                            id="location"
                            value={form.inventory.location}
                            onChange={(e) =>
                              handleNestedInputChange(
                                "inventory",
                                "location",
                                e.target.value,
                              )
                            }
                            placeholder="Warehouse location"
                            className="mt-1"
                          />
                        </div>
                      </div>
                    )}

                    <div className="flex items-center space-x-2">
                      <Switch
                        id="continueSellingOutOfStock"
                        checked={form.continueSellingOutOfStock}
                        onCheckedChange={(checked) =>
                          handleInputChange(
                            "continueSellingOutOfStock",
                            checked,
                          )
                        }
                      />
                      <Label htmlFor="continueSellingOutOfStock">
                        Continue selling when out of stock
                      </Label>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Shipping</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="requiresShipping"
                      checked={form.requiresShipping}
                      onCheckedChange={(checked) =>
                        handleInputChange("requiresShipping", checked)
                      }
                    />
                    <Label htmlFor="requiresShipping">
                      This is a physical product
                    </Label>
                  </div>

                  {form.requiresShipping && (
                    <div className="space-y-4 ml-6">
                      <div>
                        <Label htmlFor="weight">Weight (kg)</Label>
                        <Input
                          id="weight"
                          type="number"
                          value={form.weight}
                          onChange={(e) =>
                            handleInputChange(
                              "weight",
                              parseFloat(e.target.value) || 0,
                            )
                          }
                          placeholder="0.0"
                          className="mt-1"
                          step="0.1"
                        />
                      </div>

                      <div>
                        <Label>Dimensions (cm)</Label>
                        <div className="grid grid-cols-3 gap-2 mt-1">
                          <Input
                            type="number"
                            value={form.dimensions.length}
                            onChange={(e) =>
                              handleNestedInputChange(
                                "dimensions",
                                "length",
                                parseFloat(e.target.value) || 0,
                              )
                            }
                            placeholder="Length"
                          />
                          <Input
                            type="number"
                            value={form.dimensions.width}
                            onChange={(e) =>
                              handleNestedInputChange(
                                "dimensions",
                                "width",
                                parseFloat(e.target.value) || 0,
                              )
                            }
                            placeholder="Width"
                          />
                          <Input
                            type="number"
                            value={form.dimensions.height}
                            onChange={(e) =>
                              handleNestedInputChange(
                                "dimensions",
                                "height",
                                parseFloat(e.target.value) || 0,
                              )
                            }
                            placeholder="Height"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="seo" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Search Engine Optimization
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={generateSEOFromTitle}
                      disabled={!form.name}
                    >
                      Auto-generate
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="seoTitle">Page Title</Label>
                    <Input
                      id="seoTitle"
                      value={form.seo.title}
                      onChange={(e) =>
                        handleNestedInputChange("seo", "title", e.target.value)
                      }
                      placeholder="SEO page title"
                      className="mt-1"
                      maxLength={60}
                    />
                    <p className="text-xs text-falcon-text-light mt-1">
                      {form.seo.title.length}/60 characters
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="seoDescription">Meta Description</Label>
                    <Textarea
                      id="seoDescription"
                      value={form.seo.description}
                      onChange={(e) =>
                        handleNestedInputChange(
                          "seo",
                          "description",
                          e.target.value,
                        )
                      }
                      placeholder="SEO meta description"
                      className="mt-1"
                      rows={3}
                      maxLength={160}
                    />
                    <p className="text-xs text-falcon-text-light mt-1">
                      {form.seo.description.length}/160 characters
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="seoUrl">URL Handle</Label>
                    <div className="flex items-center mt-1">
                      <span className="text-sm text-falcon-text-light px-3 py-2 bg-falcon-bg-light border border-r-0 border-falcon-border-light rounded-l-md">
                        /products/
                      </span>
                      <Input
                        id="seoUrl"
                        value={form.seo.url}
                        onChange={(e) =>
                          handleNestedInputChange("seo", "url", e.target.value)
                        }
                        placeholder="product-url"
                        className="rounded-l-none"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Product Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="status">Status</Label>
                <Select
                  value={form.status}
                  onValueChange={(value: any) =>
                    handleInputChange("status", value)
                  }
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="archived">Archived</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="visibility">Visibility</Label>
                <Select
                  value={form.visibility}
                  onValueChange={(value: any) =>
                    handleInputChange("visibility", value)
                  }
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="public">Public</SelectItem>
                    <SelectItem value="private">Private</SelectItem>
                    <SelectItem value="hidden">Hidden</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Product Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <Button
                variant="outline"
                className="w-full"
                disabled={!form.name}
              >
                <Eye className="h-4 w-4 mr-2" />
                Preview Product
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start"
              >
                <Package className="h-4 w-4 mr-2" />
                Duplicate Product
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start"
              >
                <Globe className="h-4 w-4 mr-2" />
                View in Store
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start"
              >
                <Tag className="h-4 w-4 mr-2" />
                Bulk Edit
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
