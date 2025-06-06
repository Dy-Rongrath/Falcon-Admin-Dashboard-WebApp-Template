import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  Zap,
  Calculator,
  Palette,
  Code,
  Image,
  FileText,
  Hash,
  Shuffle,
  Copy,
  Download,
  Upload,
  Eye,
  EyeOff,
  RefreshCw,
  Scissors,
  Link,
  QrCode,
} from "lucide-react";
import { useState } from "react";

export default function Utilities() {
  const [passwordLength, setPasswordLength] = useState(12);
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [hashInput, setHashInput] = useState("");
  const [hashOutput, setHashOutput] = useState("");
  const [base64Input, setBase64Input] = useState("");
  const [base64Output, setBase64Output] = useState("");
  const [urlInput, setUrlInput] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const generatePassword = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setGeneratedPassword(password);
  };

  const generateHash = () => {
    // Simulate hash generation (in real app, use crypto library)
    const hash = btoa(hashInput).slice(0, 32);
    setHashOutput(hash);
  };

  const encodeBase64 = () => {
    try {
      const encoded = btoa(base64Input);
      setBase64Output(encoded);
    } catch (error) {
      setBase64Output("Error encoding");
    }
  };

  const decodeBase64 = () => {
    try {
      const decoded = atob(base64Input);
      setBase64Output(decoded);
    } catch (error) {
      setBase64Output("Error decoding");
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const formatJson = () => {
    try {
      const parsed = JSON.parse(base64Input);
      setBase64Output(JSON.stringify(parsed, null, 2));
    } catch (error) {
      setBase64Output("Invalid JSON format");
    }
  };

  const minifyJson = () => {
    try {
      const parsed = JSON.parse(base64Input);
      setBase64Output(JSON.stringify(parsed));
    } catch (error) {
      setBase64Output("Invalid JSON format");
    }
  };

  const urlEncode = () => {
    setBase64Output(encodeURIComponent(urlInput));
  };

  const urlDecode = () => {
    try {
      setBase64Output(decodeURIComponent(urlInput));
    } catch (error) {
      setBase64Output("Error decoding URL");
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Zap className="h-6 w-6" />
            Utilities
          </h1>
          <p className="text-gray-600">Developer tools and useful utilities</p>
        </div>
      </div>

      {/* Utility Categories */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="text-center">
          <CardContent className="p-6">
            <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
              <Calculator className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Calculators</h3>
            <p className="text-sm text-gray-600">Mathematical utilities</p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="p-6">
            <div className="mx-auto w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3">
              <Code className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Encoders</h3>
            <p className="text-sm text-gray-600">Text encoding tools</p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="p-6">
            <div className="mx-auto w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
              <Hash className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Generators</h3>
            <p className="text-sm text-gray-600">Password & hash tools</p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="p-6">
            <div className="mx-auto w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
              <Palette className="h-6 w-6 text-orange-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Formatters</h3>
            <p className="text-sm text-gray-600">Code formatting tools</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Utilities */}
      <Tabs defaultValue="generators" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="generators">Generators</TabsTrigger>
          <TabsTrigger value="encoders">Encoders</TabsTrigger>
          <TabsTrigger value="formatters">Formatters</TabsTrigger>
          <TabsTrigger value="converters">Converters</TabsTrigger>
        </TabsList>

        <TabsContent value="generators" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Password Generator */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Hash className="h-5 w-5" />
                  Password Generator
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Length: {passwordLength}
                  </label>
                  <input
                    type="range"
                    min="4"
                    max="50"
                    value={passwordLength}
                    onChange={(e) => setPasswordLength(Number(e.target.value))}
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Generated Password
                  </label>
                  <div className="relative">
                    <Input
                      value={generatedPassword}
                      readOnly
                      type={showPassword ? "text" : "password"}
                      className="pr-20"
                    />
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex gap-1">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => setShowPassword(!showPassword)}
                        className="h-6 w-6 p-0"
                      >
                        {showPassword ? (
                          <EyeOff className="h-3 w-3" />
                        ) : (
                          <Eye className="h-3 w-3" />
                        )}
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyToClipboard(generatedPassword)}
                        className="h-6 w-6 p-0"
                      >
                        <Copy className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button onClick={generatePassword} className="flex-1">
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Generate
                  </Button>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="uppercase" defaultChecked />
                    <label htmlFor="uppercase" className="text-sm">
                      Uppercase (A-Z)
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="lowercase" defaultChecked />
                    <label htmlFor="lowercase" className="text-sm">
                      Lowercase (a-z)
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="numbers" defaultChecked />
                    <label htmlFor="numbers" className="text-sm">
                      Numbers (0-9)
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="symbols" defaultChecked />
                    <label htmlFor="symbols" className="text-sm">
                      Symbols (!@#$)
                    </label>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hash Generator */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Hash className="h-5 w-5" />
                  Hash Generator
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Input Text</label>
                  <Textarea
                    placeholder="Enter text to hash..."
                    value={hashInput}
                    onChange={(e) => setHashInput(e.target.value)}
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Hash Output</label>
                  <div className="relative">
                    <Textarea
                      value={hashOutput}
                      readOnly
                      rows={2}
                      className="pr-10"
                    />
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => copyToClipboard(hashOutput)}
                      className="absolute top-2 right-2 h-6 w-6 p-0"
                    >
                      <Copy className="h-3 w-3" />
                    </Button>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button onClick={generateHash} className="flex-1">
                    Generate Hash
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-2 text-sm">
                  <Badge variant="outline">MD5</Badge>
                  <Badge variant="outline">SHA-1</Badge>
                  <Badge variant="outline">SHA-256</Badge>
                  <Badge variant="outline">SHA-512</Badge>
                </div>
              </CardContent>
            </Card>

            {/* UUID Generator */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shuffle className="h-5 w-5" />
                  UUID Generator
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Generated UUIDs</label>
                  <div className="space-y-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="relative">
                        <Input
                          value={`550e8400-e29b-41d4-a716-446655440${i}0${i}`}
                          readOnly
                          className="pr-10 font-mono text-sm"
                        />
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() =>
                            copyToClipboard(
                              `550e8400-e29b-41d4-a716-446655440${i}0${i}`,
                            )
                          }
                          className="absolute top-1/2 right-2 transform -translate-y-1/2 h-6 w-6 p-0"
                        >
                          <Copy className="h-3 w-3" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Generate New UUIDs
                </Button>

                <div className="text-center">
                  <Badge variant="secondary">UUID v4 (Random)</Badge>
                </div>
              </CardContent>
            </Card>

            {/* QR Code Generator */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <QrCode className="h-5 w-5" />
                  QR Code Generator
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Text or URL</label>
                  <Input
                    placeholder="Enter text or URL..."
                    value={urlInput}
                    onChange={(e) => setUrlInput(e.target.value)}
                  />
                </div>

                <div className="text-center">
                  <div className="w-32 h-32 mx-auto border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                    <QrCode className="h-16 w-16 text-gray-400" />
                  </div>
                  <p className="text-sm text-gray-500 mt-2">QR Code Preview</p>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1">Generate QR</Button>
                  <Button variant="outline">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="encoders" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Base64 Encoder */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  Base64 Encoder/Decoder
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Input</label>
                  <Textarea
                    placeholder="Enter text to encode/decode..."
                    value={base64Input}
                    onChange={(e) => setBase64Input(e.target.value)}
                    rows={4}
                  />
                </div>

                <div className="flex gap-2">
                  <Button onClick={encodeBase64} className="flex-1">
                    Encode
                  </Button>
                  <Button
                    onClick={decodeBase64}
                    variant="outline"
                    className="flex-1"
                  >
                    Decode
                  </Button>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Output</label>
                  <div className="relative">
                    <Textarea
                      value={base64Output}
                      readOnly
                      rows={4}
                      className="pr-10"
                    />
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => copyToClipboard(base64Output)}
                      className="absolute top-2 right-2 h-6 w-6 p-0"
                    >
                      <Copy className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* URL Encoder */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Link className="h-5 w-5" />
                  URL Encoder/Decoder
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">URL Input</label>
                  <Textarea
                    placeholder="Enter URL to encode/decode..."
                    value={urlInput}
                    onChange={(e) => setUrlInput(e.target.value)}
                    rows={3}
                  />
                </div>

                <div className="flex gap-2">
                  <Button onClick={urlEncode} className="flex-1">
                    Encode
                  </Button>
                  <Button
                    onClick={urlDecode}
                    variant="outline"
                    className="flex-1"
                  >
                    Decode
                  </Button>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Output</label>
                  <div className="relative">
                    <Textarea
                      value={base64Output}
                      readOnly
                      rows={3}
                      className="pr-10"
                    />
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => copyToClipboard(base64Output)}
                      className="absolute top-2 right-2 h-6 w-6 p-0"
                    >
                      <Copy className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="formatters" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* JSON Formatter */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  JSON Formatter
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">JSON Input</label>
                  <Textarea
                    placeholder='{"key": "value", "array": [1, 2, 3]}'
                    value={base64Input}
                    onChange={(e) => setBase64Input(e.target.value)}
                    rows={6}
                    className="font-mono text-sm"
                  />
                </div>

                <div className="flex gap-2">
                  <Button onClick={formatJson} className="flex-1">
                    <FileText className="h-4 w-4 mr-2" />
                    Format
                  </Button>
                  <Button
                    onClick={minifyJson}
                    variant="outline"
                    className="flex-1"
                  >
                    <Scissors className="h-4 w-4 mr-2" />
                    Minify
                  </Button>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Formatted Output
                  </label>
                  <div className="relative">
                    <Textarea
                      value={base64Output}
                      readOnly
                      rows={8}
                      className="pr-10 font-mono text-sm"
                    />
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => copyToClipboard(base64Output)}
                      className="absolute top-2 right-2 h-6 w-6 p-0"
                    >
                      <Copy className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Color Utilities */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="h-5 w-5" />
                  Color Utilities
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Color Picker</label>
                  <div className="flex gap-2">
                    <input
                      type="color"
                      value="#3b82f6"
                      className="w-12 h-10 rounded border"
                    />
                    <Input value="#3b82f6" readOnly className="flex-1" />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-gray-500">
                      HEX
                    </label>
                    <Input value="#3b82f6" readOnly />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-gray-500">
                      RGB
                    </label>
                    <Input value="rgb(59, 130, 246)" readOnly />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-gray-500">
                      HSL
                    </label>
                    <Input value="hsl(217, 91%, 60%)" readOnly />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Color Palette</label>
                  <div className="grid grid-cols-5 gap-2">
                    {[
                      "#ef4444",
                      "#f97316",
                      "#eab308",
                      "#22c55e",
                      "#3b82f6",
                    ].map((color, i) => (
                      <div
                        key={i}
                        className="w-full h-8 rounded border cursor-pointer"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="converters" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Unit Converter */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Unit Converter
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">From</label>
                    <Input placeholder="100" />
                    <select className="w-full p-2 border rounded-md">
                      <option>Meters</option>
                      <option>Feet</option>
                      <option>Inches</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">To</label>
                    <Input placeholder="328.084" readOnly />
                    <select className="w-full p-2 border rounded-md">
                      <option>Feet</option>
                      <option>Meters</option>
                      <option>Inches</option>
                    </select>
                  </div>
                </div>

                <Button className="w-full">Convert</Button>

                <div className="grid grid-cols-3 gap-2 text-sm">
                  <Badge variant="outline">Length</Badge>
                  <Badge variant="outline">Weight</Badge>
                  <Badge variant="outline">Temperature</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Text Counter */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Text Counter
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Text Input</label>
                  <Textarea placeholder="Enter your text here..." rows={6} />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">245</div>
                    <div className="text-sm text-gray-500">Characters</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">42</div>
                    <div className="text-sm text-gray-500">Words</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">3</div>
                    <div className="text-sm text-gray-500">Paragraphs</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">12</div>
                    <div className="text-sm text-gray-500">Lines</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
